
function calcTotal(arr){
    return arr.reduce((acc, cur) => acc + cur.price, 0)
}


export const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        default: 
        return {...state};
        case 'ADD_TO_CART':
            console.log('HIT ADD TO CART REDUCER');
            return {
                ...state,
                items: [...state.items, action.payload]
            }
            // return {
            //     ...state,
            //     cartItems: [state.cartItems, action.payload]
            // }
    }
}

