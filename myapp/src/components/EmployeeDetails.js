import React, {useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const EmployeeDetails = () => {
const [employeeData,setEmployeeData]=useState(null)
  const {empid}=useParams()
  console.log(empid)
  useEffect(()=>{
  
       fetch('http://localhost:8000/employee/'+empid)
      .then((res)=>res.json())
      .then((data)=>setEmployeeData(data))
      .catch((error)=>console.log(error))
    },[])

  return (
    <div className=' mt-2 bg-primary text-white align-middle'>
     {employeeData && <h1>The Employee name is: {employeeData.name}</h1>}
      {employeeData &&<h1>The Employee id is : {employeeData.id}</h1>}
     {employeeData && <h1>The Employee email is: {employeeData.email}</h1>}
     { employeeData &&<h1>The Employee phone number is: {employeeData.phone}</h1>}
     <Link className='btn btn-danger' to="/">Back to Employee List</Link>

    </div>
  )
}

export default EmployeeDetails