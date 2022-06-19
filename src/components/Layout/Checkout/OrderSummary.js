import React, { useContext } from "react";
import { GlobalContext } from "../../../store/GlobalStore";

import CheckoutItem from "./CheckoutItem";

export default function OrderSummary() {
  const { items, totalAmount } = useContext(GlobalContext);
  console.log(items);

  return (
    <>
     <h2 className="text-large mb2">Order Summary</h2> 
    <div className="cart__cart flex-col order__summary">
      <div className="cart__total flex-col cart__item">
        <div className="flex-row jcsp">
          <h1 className="text-large">Total</h1>
          <h1 className="text-large">${totalAmount}</h1>
        </div>
      </div>
      {items.map((item) => {
        return <CheckoutItem item={item} key={item.id} />;
      })}
    </div>
    </>
  );
}
