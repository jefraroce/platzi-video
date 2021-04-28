const reducer = (state, action) => {
  console.log('state.myList ', state.myList);
  console.log('action.payload ', action.payload);

  switch (action.type) {
    case 'ADD_FAVORITE': {
      const myNewList = [...state.myList];

      if (state.myList.findIndex(i => i.id === action.payload.id) < 0) {
        myNewList.push(action.payload);
      }

      return {
        ...state,
        myList: myNewList,
      };
    }
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(i => i.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
