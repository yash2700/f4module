// cardActions.js
import axios from 'axios';

export const fetchCards = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const cards = response.data;
      dispatch({ type: 'FETCH_CARDS_SUCCESS', payload: cards });
    } catch (error) {
      dispatch({ type: 'FETCH_CARDS_FAILURE', payload: error.message });
    }
  };
};
