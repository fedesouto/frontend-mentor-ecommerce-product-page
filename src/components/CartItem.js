import React from 'react';
import { useCart } from '../contexts/CartContext';
import image from '../images/image-product-1-thumbnail.jpg'
import Delete from './Icons/Delete'

const CartItem = ({quantity}) => {
    const {emptyCart} = useCart();
    return (
        <div className='cart-item'>
            <img src={image} />
            <div className='cart-item-description'>
                <p>Autumn Limited Edition...</p>
                <p> $125.00 x {quantity} <b>${125*quantity}.00</b></p>
            </div>
            <div onClick={() => emptyCart()}><Delete /></div>
        </div>
    )
}

export default CartItem;