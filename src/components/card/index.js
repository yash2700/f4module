import React from 'react'
import "./styles.css"
import { Link } from 'react-router-dom';
function index({cardDetails}) {
  
  return (
    <>
    <Link to={`/item/${cardDetails.id}`} className="card">
      <img src={`https://picsum.photos/200?random=${cardDetails.id}`} alt="" />
      <div className="cardData">
        <p>User ID: {cardDetails.id}</p>
        <p>Title : {cardDetails.title.slice(0,10)}...</p>
        <p>Body :{cardDetails.body.slice(0,30)} Read More...</p>
      </div>
    </Link>
    </>
  )
}

export default index