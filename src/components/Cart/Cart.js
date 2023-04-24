import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h4>Cart Info</h4>
            <h6>Cart Items: {cart.length} </h6>
            <p>Total Price: </p>
        </div>
    );
};

export default Cart;