function surfListReducer(state = {}, action){
  let newSurfList;
  switch (action.type) {
    case 'GET_SURF_LIST':

      return newSurfList;
    default:
      return state;
  }
}

export default surfListReducer;
