import React, { useEffect } from 'react';
import axios from 'axios';

export default function App() {
    useEffect(() => {
        axios.get('/repos/chimurai/http-proxy-middleware/pulls?per_page=1').then((res) => {
            console.log(res.data)
        })
    }, [])
}
