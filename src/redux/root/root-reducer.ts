import { combineReducers } from "redux";

import { feedbackReducer } from "../feedback/reducer";

export const rootReducer = combineReducers({
  feedback: feedbackReducer,
});
