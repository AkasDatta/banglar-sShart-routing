import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt, handleAddToCart}) => {
    const{picture, name, price} = tshirt;

    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <p>Price: ${price}</p>
            <button className='t-button' onClick={handleAddToCart}>Buy now</button>
        </div>
    );
};

export default TShirt;