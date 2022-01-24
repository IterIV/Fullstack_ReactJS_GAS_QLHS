import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { UserReducer } from "./reducers/UserReducer";
const rootReducer = combineReducers({
  // Reducer
  UserReducer,
});
export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
