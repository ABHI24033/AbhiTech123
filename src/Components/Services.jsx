import React from 'react'
//import image from './Images/SideImage.jpg'
import Card from'./Card'
import './Card.css'
import CardData from './CardData'

export default function Services() {
  return (
    <>
    <div className="container-fluid">
      <h1 id='h1_service'>Our Services</h1>
      <div className="row">
        <div className="col-11 mx-auto " id='card1'>
          {
            CardData.map((elem,index)=>{
              return  <Card
              img={elem.image}
              title={elem.title}
              key={index}/>
            })
          }
         

        </div>
      </div>
    </div>
    </>
  )
}
