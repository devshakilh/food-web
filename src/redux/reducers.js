// src/redux/reducers.js
const initialState = {
    items: [],
    totalCount: 0,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return {
          ...state,
          items: action.payload.Items,
          totalCount: action.payload.TotalCount,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  