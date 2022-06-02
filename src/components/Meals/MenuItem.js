import React from 'react';

export default function MenuItem() {

    //button adds items to cart with accurate quantity 
    //info comes from props/state
  return (
    <div className='meal flex-row'>
        <div className="meal__info flex-col">
            <p className='text-regular-bold'>Sushi</p>
            <p className='meal__info--description text-regular-italic'>It's Fish!</p>
            <p className='meal__info--price text-regular'>$14.99</p>
        </div>
        <div className="meal__add flex-col text-small">
            <div className="meal__add--amount flex-row">
                <p>Quantity</p>
                <input className='input-quantity text-small' type={'number'}></input>
            </div>
            <div className="meal__add--btn">
                <button className="btn--add--meal btn text-small">+ Add</button>
            </div>
        </div>
    </div>
  )
}
