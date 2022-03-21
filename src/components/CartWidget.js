import React from 'react';
import { useCart } from "../contexts/CartContext";
import CartIcon from "./Icons/CartIcon";

const CartWidget = () => {
    const {cart} = useCart()

    return (
        <div>
            <CartIcon />
            {cart?<span className='badge'>{cart}</span>:null}
        </div>
    )

}

export default CartWidget;