import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);

    const { price, image, title, description } = selectedProduct;

    const [count, setCount] = useState(0);

    const dispatch = useDispatch();

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })
    }

    return (
        <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div style={{ marginRight: '40px' }}>
                <img src={image} width={300} height={500} alt="" />
            </div>
            <div>
                <h1 style={{ fontFamily: 'arial' }}>{title}</h1>
                <p style={{ fontFamily: 'arial', fontSize: '20px' }}>{description}</p>
                <h1 style={{ fontSize: '50px', fontFamily: 'arial', fontWeight: 'bold', color: 'red' }}>{price} AZN</h1>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CiCirclePlus style={{ fontSize: '40px', marginRight: '5px' }} /><span style={{ fontSize: '35px' }}>{count}</span>
                    <CiCircleMinus style={{ fontSize: '40px', marginLeft: '5px' }} />
                </div>
                <div>
                    <button style={{ marginTop: '25px', border: 'none', padding: '10px', color: '#fff', backgroundColor: 'orange', borderRadius: '5px' }}>Add to basket</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails