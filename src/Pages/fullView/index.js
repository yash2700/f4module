import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./styles.css"
function Index() {
  const { id } = useParams();
  const cards = useSelector((state) => state.cards);
  const card = cards.find((i) => i.id === parseInt(id));

  return (
    <>
      {card && (
        <div className="card-details">
          <p>Details Page for Post With ID {id}</p>
          <img src={`https://picsum.photos/200?random=${card.id}`} alt="" />
          <p>User Id : {card.userId}</p>
          <p>Title : {card.title}</p>
          <p>Body : {card.body}</p>
        </div>
      )}
    </>
  );
}

export default Index;
