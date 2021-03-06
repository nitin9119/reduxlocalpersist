import { createStore, combineReducers } from "redux";
import { reducer } from "./todos/reducer";
import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  app: reducer,
});

export const store = createStore(rootReducer);
