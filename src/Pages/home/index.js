import axios from 'axios';
import React, { useEffect,useState } from 'react'
import Card from "../../components/card"
import "./styles.css"
import { useSelector } from 'react-redux';
import {fetchCards} from "../../redux/cardAction"
import { useDispatch } from 'react-redux';
import CircularProgressInfinite from "../../components/Loader/loader.js"
function Index() {
  const cards = useSelector((state) => state.cards);
  const dispatch=useDispatch();
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(()=>{
    dispatch(fetchCards())
  })

  return (
    <>
    <div className="card-container">
      {isLoading ? (
        <CircularProgressInfinite /> // Show a loading spinner while data is being fetched
      ) : (
        cards &&
        cards.map((i) => <Card cardDetails={i} key={i.id} />)
      )}
    </div>
    </>
  )
}

export default Index