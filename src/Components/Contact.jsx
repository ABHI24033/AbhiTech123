import { getValue } from '@testing-library/user-event/dist/utils';
import React ,{useState}from 'react'
import './Card.css';


export default function Contact() {
  const [input,setInput]=useState({
    fullName:'',
    Email:'',
    phone:'',
    message:''
  });
  function HandelInput(event){
    const {name,value}=event.target;
    setInput((previousValue)=>{
      return{
        ...previousValue,
        [name]:value,
      }
    })
  }

  const ONSubmit=(e)=>{
    e.preventDefault();
    alert(`Full Name=${input.fullName}
    Email=${input.Email}
    Phone Number=${input.phone}
     Message=${input.message}`)

     setInput('')
      
  }
  const OnClick=()=>{
    setInput()
  }
  return (
    <>
      <div className="container-fluid bg-light">
        <h1 id='h1contact'>Contact Us</h1>
        <div className="row">
          <div className="col-md-5 col-10 mx-auto">
            <form onSubmit={ONSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Enter Name</label>
                <input type="text" className="form-control" id="name" aria-describedby="emailHelp"
                 placeholder='Enter your Name'
                 onChange={HandelInput}
                 name="fullName"                
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Enter Email</label>
                <input type="email" className="form-control" id="email" placeholder='Enter Email'
                onChange={HandelInput}
                name="Email" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="number" className="form-control" id="phone" placeholder='Enter Phone Number'
                onChange={HandelInput}
                name="phone" />
              </div>
              <div className="mb-3">

                <label htmlFor="exampleformControlTextarea1" className="form-label">Message:</label>
                <textarea className="form-control" 
                id="exampleformControlTextarea1"
                 rows="3"
                onChange={HandelInput}
                name='message'></textarea>
              </div>

              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-outline-primary"
               id='btn'
               onClick={OnClick} >Submit</button>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}