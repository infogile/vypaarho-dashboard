import { combineReducers } from "redux";
import appReducer from "./appReducer";
import uiReducer from "./uiReducer";
export default combineReducers({
  ui: uiReducer,
  app: appReducer,
});
