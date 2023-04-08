import React from 'react';
import './tshirt.css'

const TShirt = ({tshirt}) => {
    const{picture, name, price} = tshirt;

    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <p>Price: ${price}</p>
            <button className='t-button'>Buy now</button>
        </div>
    );
};

export default TShirt;