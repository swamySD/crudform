import React ,{useEffect,useState}from 'react'
import { useParams,useNavigate,Link } from 'react-router-dom'

const EditEmployee=()=> {
 
  const [id,setIdChange]=useState("")
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [active,setActive]=useState(false)
  const [validation,setValidation]=useState(false)
  const [validation1,setValidation1]=useState(false)

  const navigate=useNavigate()
  const {empid}=useParams()
  const handleSubmit=(e)=>{
      e.preventDefault()
      console.log({id,name,email,phone,active})
      const empData={id,name,email,phone,active}
    fetch('http://localhost:8000/employee/'+empid,
      {
          method:'PUT',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(empData)
      })
    .then((res)=>{
      alert('Saved successfully.')
      navigate('/')
    })
      .catch((error)=>console.log(error))

      
}
useEffect(()=>{
  fetch('http://localhost:8000/employee/'+empid)
      .then((res)=>res.json())
      .then((data)=>{setIdChange(data.id);
      setName(data.name)
      setEmail(data.email)
      setPhone(data.phone)
      setActive(data.active)
    })
      .catch((error)=>console.log(error))
    },[])

  return (
    <div>
       <div>
        <div className='row'>
            <div className='offset-lg-3 col-lg-6'>
                <form className='container' onSubmit={handleSubmit}>
                    <div className='card'>
                        <div className='card-title'>
                            <h2>Edit Employee</h2>
                        </div>
                        <div className='card-body'>
                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <label>ID</label>
                                    <input className='form-control' value={id} disabled="disabled"/>
                                </div>


                                 <div className='col-lg-12'>                
                                <div className='form-group'>
                                    <label>Name</label><input required value={name} onMouseDown={(e)=>setValidation(true)} onChange={(e)=>setName(e.target.value)} className='form-control' type="text"/>
                                    {name.length===0 &&validation &&<span className='text-danger'>Enter the Name</span>}
                                </div>
                                 </div>

                                  <div className='col-lg-12'>               
                                <div className='form-group'>
                                    <label>Email</label>
                                    <input value={email} required onMouseDown={(e)=>setValidation1(true)} onChange={(e)=>setEmail(e.target.value)} className='form-control'type="email"/>
                                    {email.length===0 &&validation1 &&<span className='text-danger'>Enter the Name</span>}
                                </div>
                                </div>
                                <div className='col-lg-12'>    
                                <div className='form-group'>
                                    <label>Phone</label>
                                    <input value={phone} onChange={(e)=>setPhone(e.target.value)} className='form-control' type=""/>
                                </div>
                                </div>

                                <div className='col-lg-12'>
                                <div className='form-check'>
                                    <label className='form-check-label'>Is Active</label>
                                    <input checked={active} onChange={(e)=>setActive(!active)} className='form-check-input' type="checkbox"/>
                                </div>
                                </div>


                            <div className='col-lg-12'>
                                <div className='form-group'>
                                    <button className='btn btn-success' type="submit">Save</button>
                                    <Link to="/" className='btn btn-danger'>Back</Link>
                                </div>
                                </div>        

                            </div>
                        </div>
                    </div>
                </form>

            </div>

        </div>
    </div>
    </div>
  )
}


export default EditEmployee