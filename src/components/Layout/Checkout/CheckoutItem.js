import React from 'react'

export default function CheckoutItem({item}) {

    const {name, quantity, price, emoji} = item;

  return (
    <div className="cart__item flex-col">
    <div className="cart__item--name flex-row">
      <h2 className="text-regular-bold">{name}</h2>
    <span className='app__message--emoji'>{emoji}</span>
    </div>
    <div className="cart__item--amounts flex-row">
      <div className="price-quantity flex-row text-regular">
        <p>{price}</p>
        <span className="input-quantity flex-row">
          <p>Quantity: </p> {quantity}
        </span>
      </div>
    </div>
  </div>
  )
}
