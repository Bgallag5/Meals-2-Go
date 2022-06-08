import React, { useContext } from "react";
import { GlobalContext } from "../../store/GlobalStore";

export default function CartItem({ item }) {
  const { name, price, id, quantity } = item;
  const { addItem, reduceItem, removeItem } = useContext(GlobalContext);

  const handleClearItem = (e) => {
    e.preventDefault();
    removeItem(item);
  };

  return (
    <div className="cart__item flex-col">
      <div className="cart__item--name flex-row">
        <button
          title="Remove Item"
          className="clear-item"
          onClick={(e) => handleClearItem(e)}
        >
          X
        </button>
        <h2 className="text-regular-bold">{name}</h2>
      </div>
      <div className="cart__item--amounts flex-row">
        <div className="price-quantity flex-row text-regular">
          <p>{price}</p>
          <span className="input-quantity flex-row">
            <p>Quantity: </p> {quantity}
          </span>
        </div>
        <div className="plus-minus flex-row">
          <button
            title="Remove One"
            onClick={() => reduceItem(item)}
            data-num={-1}
            className="btn btn-blue cart--btn-change"
          >
            -
          </button>
          <button
            title="Add One"
            onClick={() => addItem(item, 1)}
            data-num={1}
            className="btn cart--btn-change"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
