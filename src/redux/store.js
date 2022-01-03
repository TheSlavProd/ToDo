import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { reducer } from "./Redux";
const store = createStore(reducer, applyMiddleware(thunk, logger));
export default store;
