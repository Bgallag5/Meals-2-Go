function calcTotal(arr) {
  const total = arr.reduce((acc, cur) => {
    //regex - get number from price string on current item
    const price = Number(cur.price.replace(/[^\d.-]/g, ""));
    //add the price to the accumulator -> to two decimals -> convert all to a Number
    //toFixed() converts Num to String, must convert back
    return Number((price + acc).toFixed(2));
  }, 0);

  return total;
}

const storeData = (data) => {
  //push to LS
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    default:
      return { ...state };
    case "ADD_TO_CART":
      //check cart for already existing item
      const itemAlreadyInCart = state.items.find(
        (item) => item.id === payload.item.id
      );
      console.log(itemAlreadyInCart);
      let updatedItems;
      //if item exists in items -> update that item.quantity
      if (itemAlreadyInCart) {
            const updatedItem = {
                ...itemAlreadyInCart,
                quantity: itemAlreadyInCart.quantity + payload.quantity
            }
            updatedItems = [...state.items];
            updatedItems[state.items.indexOf(itemAlreadyInCart)] = updatedItem;



        // //// state.item.quantity = state.item.quantity + payload.quantity;
        // state.items.forEach(item => {
        //    if(item.id === itemAlreadyInCart.id){
        //     const updatedItem = {
        //         ...item,
        //         quantity: item.quantity + payload.quantity
        //     }
        //     console.log(updatedItem);
        //     return updatedItems = [...state.items, updatedItem]
        //    }
        // })

        // return {
        //     ...state,
        //     totalAmount: calcTotal(updatedItems),
        //     items: updatedItems,
        // };
      }
      //else add item with quantity
      else if (!itemAlreadyInCart) {
        payload.item.quantity = payload.quantity;
         updatedItems = [...state.items, payload.item];
        console.log(updatedItems);
    }
    return {
      ...state,
      totalAmount: calcTotal(updatedItems),
      items: updatedItems,
    };
  }
};
