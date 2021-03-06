import React, { useContext, useState } from "react";
import { GlobalContext } from "../../store/GlobalStore";
import { useParams } from "react-router-dom";

export default function SingleItemView() {
  const [itemQuantity, setItemQuantity] = useState(1);

  const { addItem, setAppMessage, items, availableMeals } = useContext(GlobalContext);
  const params = useParams();
  let selectedMeal = availableMeals.find((item) => item.id == params.itemId);
  const { id, name, price, description, category, course, img } = selectedMeal;

  const handleQuantityChange = (e) => {
    e.preventDefault();
    setItemQuantity(Number(e.target.value));
  };

  return (
    <div className="meal flex-row">
      <div className="meal__info flex-col">
        <p className="text-regular-bold">{name}</p>
        <p className="meal__info--description text-regular-italic">
          {description}
        </p>
        <p className="meal__info--price text-regular">{price}</p>
      </div>
      <div className="meal__add flex-col text-small">
        <div className="meal__add--amount flex-row">
          <p>Quantity</p>
          <input
            defaultValue={1}
            onChange={handleQuantityChange}
            className="input-quantity text-small"
            type={"number"}
          ></input>
        </div>
        <div className="meal__add--btn">
          <button
            onClick={() => addItem(selectedMeal, itemQuantity)}
            className="btn--add--meal btn text-small"
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}
