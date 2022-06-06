import React, {useContext} from "react";
import { GlobalContext } from "../../store/GlobalStore";


export default function CartItem({item}) {
    const {name, price, id, quantity} = item;
    const {addItem, reduceItem} = useContext(GlobalContext);

  return (
    <div className="cart__item flex-col">
      <h2 className="text-regular-bold">{name}</h2>
      <div className="cart__item--amounts flex-row">
        <div className="price-quantity flex-row text-regular">
          <p>{price}</p>
          <span className="input-quantity flex-row"><p>Quantity: </p> {quantity}</span>
        </div>
        <div className="plus-minus flex-row">
          <button onClick={() => reduceItem(item)} data-num={-1} className="btn btn-blue cart--btn-change">
            -
          </button>
          <button onClick={() => addItem(item, 1)} data-num={1} className="btn cart--btn-change">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
