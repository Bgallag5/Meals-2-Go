//calculate the cart total
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
        //recreate the existing item but change that item's quantity
        const updatedItem = {
          ...itemAlreadyInCart,
          quantity: itemAlreadyInCart.quantity + payload.quantity,
        };
        //spread old cart items
        updatedItems = [...state.items];
        //overwrite the existing cart item with the updated item with correct quantity
        updatedItems[state.items.indexOf(itemAlreadyInCart)] = updatedItem;
      }
      //else add item and set quantity property
      else if (!itemAlreadyInCart) {
        payload.item.quantity = payload.quantity;
        updatedItems = [...state.items, payload.item];
      }
      //return updated state, new cart items, and the calced total
      return {
        ...state,
        totalAmount: calcTotal(updatedItems),
        items: updatedItems,
      };

      case 'REDUCE_ITEM': 
        console.log(payload);

        const itemToReduce = state.items.find(item => item.id === payload.id);
        console.log(itemToReduce);
        // const quantity = itemToReduce.quantity - 1;
        // let updatedItem ={...itemToReduce, itemToReduce.quantity = itemToReduce.quantity - 1};
        let updated;
        if (itemToReduce){
            let newItem = {...itemToReduce, quantity: itemToReduce.quantity - 1};

            updated = [...state.items]
            updated[state.items.indexOf(itemToReduce)] = newItem;
   
        //    updated[state.items.indexOf(itemToReduce)] = newItem
        }
 

      return {
          ...state,
          totalAmount: calcTotal(updated),
          items: updated
    }

  }
};
