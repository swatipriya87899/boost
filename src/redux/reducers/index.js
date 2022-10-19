const initialState={
    nav: false
}
function reducer(state = initialState, action) {
switch(action.type) {
  case 'NAVBAR':
    return {...state, nav:action.payload}
  default:
    return state;
  }
}
export default reducer;