import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const { id } = useParams();
    const { product } = useSelector((store) => store.product);

    useEffect(() => {

    }, [])
    return (
        <div>ProductDetails {id}</div>
    )
}

export default ProductDetails