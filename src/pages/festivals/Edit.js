import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const Edit = () => {
    const { id } = useParams();
    const [festival, setFestival] = useState(null);

    let token = localStorage.getItem('token');
    useEffect(() => {
        axios.get(`https://festivals-api.vercel.app/api/festivals/${id}`, {
            headers: {
                'Authorization': `Bearer  ${token}`
            }
        })
            .then(response => {
                console.log(response.data)
                setFestival(response.data)
    })
        .catch(err => {
        console.log(err)
    })
    })
    if(!festival) return <h3>Festival not found</h3>
    return (
        <>
            <h2>Festival: {id}</h2>
        </>  
    );
}
export default Edit