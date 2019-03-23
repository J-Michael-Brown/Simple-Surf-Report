function selectedDayReducer(state = {}, action){
  const {type, dayIndex} = action;
  let newDayIndex;
  switch (type) {
    case 'SET_DAY_INDEX':
      newDayIndex = dayIndex;
      return newDayIndex;
    default:
      return state
  }
}

export default selectedDayReducer;
