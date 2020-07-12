import { Feedback } from "../types/feedback";
import { FeedbackActionType } from "../types/action-type";

export type AddFeedbackAction = {
  type: FeedbackActionType.ADD_FEEDBACK;
  payload: {
    feedback: Feedback;
  };
};

export type FeedbackAction = AddFeedbackAction;
