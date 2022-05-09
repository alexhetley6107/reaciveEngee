import { combineReducers, configureStore, createStore } from "redux";
import { listReducer } from "./listReduser";


export const store = createStore(listReducer);