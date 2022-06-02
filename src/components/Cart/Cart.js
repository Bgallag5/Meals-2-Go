import React, {useContext} from 'react';

import CartItem from './CartItem';

import { AppContext } from '../../App';

export default function Cart() {

    const {modalRef, modalContainerRef, handleCloseModal} = useContext(AppContext);


  return (
    <div ref={modalContainerRef} onClick={handleCloseModal} className='cart flex-col hidden'>
        <div ref={modalRef} className="cart__cart flex-col">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <div className="cart__total flex-col cart__item">
                <div className='flex-row jcsp'>
                <h1 className="text-large">Total</h1>
                <h1 className="text-large">$50.95</h1>
                </div>
                <div className='flex-row order--buttons'>
                    <button className="btn text-regular cart--btn-close">Close</button>
                    <button className="btn text-regular cart--btn-order">Order</button>
                </div>
            </div>
        </div>
    </div>
  )
}
