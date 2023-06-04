import axios from 'axios';
import React, { useEffect,useState } from 'react'
import Card from "../../components/card"
import "./styles.css"
import { useSelector } from 'react-redux';
import {fetchCards} from "../../redux/cardAction"
import { useDispatch } from 'react-redux';
function Index() {
  const cards = useSelector((state) => state.cards);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchCards())
  })

  return (
    <>
    <div className="card-container">
      {
        cards && 
          cards.map((i)=>(
            <Card cardDetails={i} />
          ))
        
      }
        
      </div>
    </>
  )
}

export default Index