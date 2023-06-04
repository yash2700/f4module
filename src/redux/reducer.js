// cardReducer.js
const initialState = {
    cards: [],
    error: null,
  };
  
  const cardReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CARDS_SUCCESS':
        return {
          ...state,
          cards: action.payload,
          error: null,
        };
      case 'FETCH_CARDS_FAILURE':
        return {
          ...state,
          cards: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default cardReducer;
  