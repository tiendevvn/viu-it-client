import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// reduces
import { appReducer } from "@/app/reducers/app.reducer";
import { userReducer } from "@/app/reducers/user.reducer";

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
