import React from 'react'
//import image from './Images/SideImage.jpg'
import './Card.css'

export default function Card(props) {
  return (
    <>

          <div className="card" style={{width:"18rem",marginBottom: "2rem"}}>
            <img src={props.img} className="card-img-top" alt="Image of a" style={{height:"17rem"}}/>
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-outline-primary">Learn more..</a>
              </div>
          </div>
    </>
  )
}
