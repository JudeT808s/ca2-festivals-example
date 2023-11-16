import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Create = () => {
  const navigate = useNavigate();
  const[errors,setErrors] = useState();
  const [form, setForm] = useState({
    title: "",
    description: "",
    city: "",
    start_date: "",
    end_date: "",
  })
  const handleForm = (e) => {
    setForm(prevState => ({
      ...prevState, [e.target.name]: e.target.value
    }));
  };
  const errorStyle = {
    color: 'red'
}
  const isRequired = (fields) => {
    fields.forEach(field => {

      if (!form[field]) {
        console.log(`${field} is required`)

        required = true;
        setErrors(prevState => ({...prevState, [field] : {
          message: `${field} is required`
        }
        }))
      }
    });
    return required
  };

  const submitForm = (e) => {
    e.preventDefault()
    console.log('submitted', form);

    if (isRequired('title', 'description', 'city')) {
      let token = localStorage.getItem('token')

      axios.post(`https://festivals-api.vercel.app/api/festivals`, form, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
        .then(response => {
          navigate('/festivals')
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
  return (

    <>
      <h1>Hello from create</h1>
      <form onSubmit={submitForm}>
        <div>Title: <input type="text" onChange={handleForm} value={form.title} name="title"></input><span className="errorStyle">{errors.title?.message}</span></div>
        <div>Description: <input type="text" onChange={handleForm} value={form.description} name="description"></input><span className="errorStyle">{errors.description?.message}</span></div>
        <div>City: <input type="text" onChange={handleForm} value={form.city} name="city"></input><span className="errorStyle">{errors.city?.message}</span></div>
        <div>Start date: <input type="datetime-local" onChange={handleForm} value={form.start_date} name="start_date"></input><span className="errorStyle">{errors.start_date?.message}</span></div>
        <div>End Date: <input type="datetime-local" onChange={handleForm} value={form.end_date} name="end_date"></input><span className="errorStyle">{errors.end_date?.message}</span></div>
        <input type="submit"></input>
      </form>
    </>
  )

}

export default Create;
