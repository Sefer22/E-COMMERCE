import React from 'react'
import '../css/Product.css';

function Product({ product }) {
    const { id, price, image, title, description } = product;
    return (
        <div>
            <img className='image' src={image} />
        </div>
    )
}

export default Product