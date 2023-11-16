import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Index = ({ authenticated }) => {
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    axios.get(`https://festivals-api.vercel.app/api/festivals`)
      .then(response => {
        setFestivals(response.data);
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (festivals.length === 0) return <h3>There are no festivals</h3>;

  const festivalsList = festivals.map(festival => (
    <div key={festival._id}>
      <p>
        <b>Title:</b> {authenticated ? <Link to={`${festival._id}`}>{festival.title}</Link> : festival.title}
      </p>
      <p><b>Description:</b>{festival.description}</p>
      <br />
    </div>
  ));

  return (
    <>
      <h2>All Festivals</h2>
      {festivalsList}
    </>
  );
}

export default Index;
