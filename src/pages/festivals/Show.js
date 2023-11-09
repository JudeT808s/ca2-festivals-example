import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const Show = () => {
    const { id } = useParams();
    const [festival, setFestival] = useState(null);
    useEffect(() => {
        axios.get(`https://festivals-api.vercel.app/api/festivals/${id}`, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9rQG9rLmNvbSIsImZ1bGxfbmFtZSI6Im9rIiwiX2lkIjoiNjU0Y2M4NzU1NmEwMWUwMDA4OGE2YTM2IiwiaWF0IjoxNjk5NTMwOTcyfQ.8vHdr8W369l0T1eKMH848BCea-M4JK1uZBekHANjbaI'
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
export default Show