import React from 'react'

function Product({ product }) {
    const { id, price, image, title, description } = product;
    console.log(product)
    return (
        <div>Product</div>
    )
}

export default Product