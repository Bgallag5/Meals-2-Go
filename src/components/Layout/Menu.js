import React from 'react';
import MenuItem from '../Meals/MenuItem';

export default function Menu() {
  return (
    <div className="menu flex-col">
        <div className="menu__about flex-col">
            <h1 className="menu__about--title text-large">Delicious Food, Delivered Now</h1>
            <p className="menu__about--text text-small">Choose your perfect dish from our broad selection of international favorites. Enjoy restaurant quality Breakfast, Lunch, and Dinner without leaving home.</p>
            <p className="menu__about--text text-small">All of our meals are made with fresh, local ingredients, and prepared by award-winning chefs</p>
        </div>
        <div className="menu__menu flex-col">
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
    </div>
  )
}
