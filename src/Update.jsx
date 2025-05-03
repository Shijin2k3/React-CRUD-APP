import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Update() {
  // const [data,setData]=useState([])
  const { id }=useParams();
  const [values,setValues]=useState({
    name:"",
    email:"",
    phone:""
 })
  const navigate=useNavigate()
  const handleChange =(e)=>{
      setValues({...values,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.put("http://localhost:3000/users/" + id,values)
    .then(res=>{
         console.log(res)
         navigate('/')
    })

    .catch(err=>console.log(err))
  }
  
  useEffect(()=>{
    axios.get('http://localhost:3000/users/' + id)
       .then(res =>{
        setValues(res.data)
       })
       .catch(error => console.log(error))
  },[])

   return (
  <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light vh-100'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
          <h2 className='d-flex justify-content-center'>Update a User</h2>
          <form onSubmit={handleSubmit}>
              <div className='mb-2'>
                  <label htmlFor="name">Name : </label>
                  <input value={values.name} onChange={handleChange}
                   type='text' name='name' className='form-control' placeholder='Enter Name'/>
              </div>
              <div className='mb-2'>
                  <label htmlFor="email">Email : </label>
                  <input value={values.email} onChange={handleChange}
                   type='email' name='email' className='form-control' placeholder='Enter Email'/>
              </div>
              <div className='mb-2'>
                  <label htmlFor="phone">Phone : </label>
                  <input value={values.phone} onChange={handleChange}
                   type='text' name='phone' className='form-control' placeholder='Enter Phone no'/>
              </div>
              <button className='btn btn-success' type='submit' >Update</button>
              <Link to='/' className='btn btn-primary ms-4'>Back</Link>
          </form>
      </div>
  </div>
)
  
}

export default Update