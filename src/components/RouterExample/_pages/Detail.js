import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Detail(props) {
    const { params } = props.match;
    const history = useHistory();
    const [detail, setDetail] = useState('')

    useEffect(() => {
        axios.get('./testData/product.json').then((res) => {
            setDetail(res.data.find(i => i.id.toString() === params.id).detail)
        })
    }, [params])
    return(
        <React.Fragment>
            <button onClick={() => history.push('/product')}>BACK</button>
            <h1>Detail</h1>
            <p>{detail}</p>
        </React.Fragment>
    ) 
}