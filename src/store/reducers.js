function calcTotal(arr) {
  const total = arr.reduce((acc, cur) => {
    console.log(acc);

    //regex - get number from price string on current item
    const price = Number(cur.price.replace(/[^\d.-]/g, ""));
    console.log(price);
    //add the price to the accumulator -> to two decimals -> convert all to a Number
    //toFixed() converts Num to String, must convert back
    return Number((price + acc).toFixed(2));
  }, 0);

  return total;
}

const storeData = (data) => {
  //push to LS
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    default:
      return { ...state };
    case "ADD_TO_CART":
      console.log("HIT ADD TO CART REDUCER");
      return {
        ...state,
        totalAmount: calcTotal([...state.items, action.payload]),
        items: [...state.items, action.payload],
      };
    // return {
    //     ...state,
    //     cartItems: [state.cartItems, action.payload]
    // }
  }
};
