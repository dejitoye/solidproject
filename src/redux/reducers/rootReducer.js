import { combineReducers } from "redux";
import { friendReducer } from "./friendsReducer";
import { sampleReducer } from "./sampleReducer";
import { userSessionReducer } from "./userSessionReducer";
import { utilsReducer } from "./utilsReducer";

const rootReducer = combineReducers({
  sample: sampleReducer,
  userSession:userSessionReducer,
  utils:utilsReducer,
  friend:friendReducer
});

export default rootReducer;
