import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    
    let total = 0;
    for( let i =0; i < cart.length; i++){
        const course = cart[i]
        total = total + course.price;
    }



    return (
        <div className="cart-area">
            <h1>Order Summery</h1>
            <h2>Purchase Course :{cart.length} </h2>
            <h3>Course Price :${total}</h3>
            <br/>
           <h2> Grand Total :$ {total}</h2>
            
        </div>
    );
};

export default Cart;