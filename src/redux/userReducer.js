const initialState = {
  isAuth: false
}


const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {...state, isAuth: true};
    case LOG_OUT:
      return {...state, isAuth: false};
    default:
      return state;
  }


}