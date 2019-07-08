import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as homeReducer } from "../views/Home/store";
import { reducer as loginReducer } from "../views/Login/store";

const reducer = combineReducers({
  home: homeReducer,
  login: loginReducer
});

const store = () => createStore(reducer, applyMiddleware(thunk));

export default store();
