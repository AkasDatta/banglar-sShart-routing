import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>please add some products</p>
    }
    else{
        message =<div>
            <h2>Boroloxxx</h2>
            <p>Thanks for giving your money</p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length ===1 ? 'blue' : 'red'}>Order summery: {cart.length}</h2>
            <p className={`bold bordered ${cart.length === 3 ? 'yellow' : 'purple'}`}>Something</p>
            {
                cart.length > 2 
                    ? <span className='purple'>Aro kino</span>
                    : <span>fokira</span>
            }
            {message}
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}>
                    {tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                </p>)
            }

            {
                cart.length === 2 && <p>Double bon an</p>
            }

            {
                cart.length === 3 || <h3>Tinta to hoilo na</h3>
            }
        </div>
    );
};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1. use if or if else or else if to set a variable that will contain an element, components
 * 2. Ternary operator: condition ? 'for true' : 'false'
 * 3. Logical &&: if the condition is true then the next thing will be displayed
 * 4. Logical ||: if the condition is false then the next thing will be displaye
 */

/**
 * conditional css
 * 1. use ternary
 * 2. ternary inside template string
 */