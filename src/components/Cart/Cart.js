import React, { useContext } from "react";
import CartItem from "./CartItem";
import { AppContext } from "../../App";
import {GlobalContext} from '../../store/GlobalStore';

export default function Cart(props) {

    //displays items the user has added with accurate quantity
    //+/- buttons change the quantity and update the total price
    //quantity inputs should only update with buttons - change the input to a span or h2
    //order button does something
    // x button to remove cart item, 
    //changing quantity to 0 does not remove item from dom
    //info comes from props/state - dummy data file;

    //AppContext contains refs and functions that need to be passed around the application
  const {
    modalRef,
    modalContainerRef,
    handleCloseModal,
    handleToggleModal,
    handleClickOffModal,
  } = useContext(AppContext);

  //GlobalContext contains our top level app state - found in the GlobalStore.js
  const {items, totalAmount, availableMeals} = useContext(GlobalContext);
  console.log(items);



  return (
    <div
      ref={modalContainerRef}
      onClick={handleClickOffModal}
      className="cart flex-col hidden"
    >
      <div  className="cart__cart flex-col">
        <CartItem />
        <CartItem />
        <CartItem />
        <div className="cart__total flex-col cart__item">
          <div className="flex-row jcsp">
            <h1 className="text-large">Total</h1>
            <h1 className="text-large">$50.95</h1>
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
