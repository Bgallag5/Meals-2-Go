function calcTotal(arr) {
  const total = arr.reduce((acc, cur) => {
    //regex - get number from price string on current item
    const price = Number(cur.price.replace(/[^\d.-]/g, "") * cur.quantity);
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
      let updatedItems;
      //if item exists in items (cart) -> update that item.quantity
      if (itemAlreadyInCart) {
        const updatedItem = {
          ...itemAlreadyInCart,
          quantity: itemAlreadyInCart.quantity + payload.quantity,
        };
        updatedItems = [...state.items];
        updatedItems[state.items.indexOf(itemAlreadyInCart)] = updatedItem;
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
