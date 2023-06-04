import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCards } from '../../redux/cardAction'; // Import your fetchCards action
import "./styles.css"
import CircularProgress from '@mui/material/CircularProgress';
import CircularProgressInfinite from '../../components/Loader/loader';

function Index() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);
  const isLoading = useSelector((state) => state.isLoading);
  const card = cards.find((i) => i.id === parseInt(id));

  useEffect(() => {
    dispatch(fetchCards()); // Dispatch the action to fetch cards data
  }, [dispatch]);

  if (isLoading) {
    return <CircularProgressInfinite />;
  }

  return (
    <div className="card-details">
      <p>Details Page for Post With ID {id}</p>
      <img src={`https://picsum.photos/200?random=${card.id}`} alt="" />
      <p>User Id : {card.userId}</p>
      <p>Title : {card.title}</p>
      <p>Body : {card.body}</p>
    </div>
  );
}

export default Index;
