import { FeedbackActionType } from "../types/action-type";
import { AddFeedbackAction } from "../types/action";
import { Feedback } from "../types/feedback";

export const addFeedback = (feedback: Feedback): AddFeedbackAction => {
  return { type: FeedbackActionType.ADD_FEEDBACK, payload: { feedback } };
};
