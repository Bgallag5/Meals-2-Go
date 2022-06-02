import React, {useContext} from 'react'
import { AppContext } from '../../App'

export default function Cart() {

    const {modalRef, modalContainerRef, handleCloseModal} = useContext(AppContext);


  return (
    <div ref={modalContainerRef} onClick={handleCloseModal} className='cart flex-col hidden'>
        <div ref={modalRef} className="cart__cart flex-col">
            {/* cart Item */}
            {/* cart Item */}
            {/* cart Item */}
            <div className="cart__total flex-row">
            <h1 className="text-large">Total</h1>
            <div></div>
            </div>
        </div>
    </div>
  )
}
