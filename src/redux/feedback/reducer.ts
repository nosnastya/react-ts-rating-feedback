import { FeedbackActionType } from "./types/action-type";
import { FeedbackAction } from "./types/action";
import { FeedbackState } from "./types/state";

export const INITIAL_STATE: FeedbackState = {
  list: [],
};

export const feedbackReducer = (state: FeedbackState = INITIAL_STATE, action: FeedbackAction): FeedbackState => {
  switch (action.type) {
    case FeedbackActionType.ADD_FEEDBACK:
      return {
        ...state,
        list: [...state.list, action.payload.feedback],
      };

    default:
      return state;
  }
};
