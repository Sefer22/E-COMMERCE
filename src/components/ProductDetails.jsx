import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const { id } = useParams();
    const { products } = useSelector((store) => store.product);

    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {

            }
        })
    }

    return (
        <div>ProductDetails {id}</div>
    )
}

export default ProductDetails