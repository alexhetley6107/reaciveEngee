import { combineReducers, configureStore, createStore } from "redux";
import { listReducer } from "./listReduser";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  list: listReducer,
  user: userReducer
})

export const store = createStore(rootReducer);