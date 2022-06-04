import React, { useContext, useState, useEffect } from "react";
import MenuItem from "../Meals/MenuItem";
import Spinner from "../UI/Spinner";

import { GlobalContext } from "../../store/GlobalStore";

export default function Menu() {
  const [loading, setLoading] = useState(true);

  function sleep(ms) {
    setTimeout(() => {
      setLoading(false);
    }, ms);
  }

  useEffect(() => {
    sleep(2000);
  }, []);

  const { availableMeals } = useContext(GlobalContext);

  return (
    <div className="menu flex-col">
      <div className="menu__about flex-col">
        <h1 className="menu__about--title text-large">
          Delicious Food, Delivered Now
        </h1>
        <p className="menu__about--text text-small">
          Choose your perfect dish from our broad selection of international
          favorites. Enjoy restaurant quality Breakfast, Lunch, and Dinner
          without leaving home.
        </p>
        <p className="menu__about--text text-small">
          All of our meals are made with fresh, local ingredients, and prepared
          by award-winning chefs
        </p>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="menu__menu flex-col">
          {availableMeals.map((meal) => {
            return <MenuItem meal={meal} key={meal.id} />;
          })}
        </div>
      )}
    </div>
  );
}
