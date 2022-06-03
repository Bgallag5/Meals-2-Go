import React, { useContext } from "react";
import CartItem from "./CartItem";
import { AppContext } from "../../App";
import { GlobalContext } from "../../store/GlobalStore";

export default function Cart() {
  //order button does something
  // x button to remove entire cart item,
  //changing quantity to 0 does not remove item from dom

  //AppContext contains refs and functions that need to be passed around the application
  const {
    modalRef,
    modalContainerRef,
    handleToggleModal,
    handleClickOffModal,
  } = useContext(AppContext);

  //GlobalContext contains our top level app state - found in the GlobalStore.js
  const { items, totalAmount } = useContext(GlobalContext);

  return (
    <div
      ref={modalContainerRef}
      onClick={(e) => handleClickOffModal(e)}
      className="cart flex-col hidden"
    >
      <div ref={modalRef} className="cart__cart flex-col">
        {items.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
        <div className="cart__total flex-col cart__item">
          <div className="flex-row jcsp">
            <h1 className="text-large">Total</h1>
            <h1 className="text-large">${totalAmount}</h1>
          </div>
          <div className="flex-row order--buttons">
            <button
              onClick={handleToggleModal}
              className="btn text-regular cart--btn-close"
            >
              Close
            </button>
            <button className="btn btn-red text-regular cart--btn-order">
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
