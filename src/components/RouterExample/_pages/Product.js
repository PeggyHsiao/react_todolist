import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Product() {
    const history = useHistory();
    const [product, setProduct] = useState([]);

    const productBox = {
        margin: '10px',
        border: '1px solid grey',
        width: '100%',
        height: 60,
        lineHeight: '60px',
        textAlign: 'center',
        cursor: 'pointer'
    }

    useEffect(() => {
        axios.get('./testData/product.json').then(res => {
            setProduct(res.data)
        })
    }, [])

    const goToDetailPage = (id) => {
        history.push(`/detail/${id}`)

        // 不透過網址傳參數1
        // history.push({ pathname: '/xxxx', query: { paramName: OOO } })
        // 使用props.history.location.query拿取參數

        // 不透過網址傳參數2
        // history.push({ pathname: '/xxxx', state: { paramName: OOO } })
        // 使用props.history.state.query拿取參數

    }

    return(
        <React.Fragment>
            <h1>Product</h1>
            { product.map(item => 
                <div style={productBox} key={item.id} onClick={() => goToDetailPage(item.id) }>{item.name}</div>) }
        </React.Fragment>
    ) 
}