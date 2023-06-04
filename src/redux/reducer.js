// cardReducer.js
const initialState = {
    cards: [],
    isLoading:true,
    error: null,
  };
  
  const cardReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CARDS_SUCCESS':
        return {
          ...state,
          isLoading:false,
          cards: action.payload,
          error: null,
        };
      case 'FETCH_CARDS_FAILURE':
        return {
          ...state,
          cards: [],
          isLoading:true,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default cardReducer;
  