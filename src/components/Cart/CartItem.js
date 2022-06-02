import React from "react";

export default function CartItem() {

  return (
    <div className="cart__item flex-col">
      <h2 className="text-regular-bold">Sushi</h2>
      <div className="cart__item--amounts flex-row">
        <div className="price-quantity flex-row text-regular">
          <p>$15.99</p>
          <input className="input-quantity" type={"number"}></input>
        </div>
        <div className="plus-minus flex-row">
          <button data-num={-1} className="btn btn-blue cart--btn-change">
            -
          </button>
          <button data-num={1} className="btn cart--btn-change">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
