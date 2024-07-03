import React from 'react'
import '../css/Product.css';

function Product({ product }) {
    const { id, price, image, title, description } = product;
    return (
        <div className='card'>
            <img className='image' src={image} alt="" />
            <div>
                <p style={{ textAlign: 'center' }}>{title}</p>
                <h3 style={{ textAlign: 'center' }}>{price}</h3>
            </div>
        </div>
    )
}

export default Product