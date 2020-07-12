import { FeedbackViewComponent } from "./FeedbackView";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Dispatch } from "redux";

import { addFeedback } from "../../redux/feedback/actions/add-feedback";
import { Feedback } from "../../redux/feedback/types/feedback";
import { RootState } from "../../redux/root/state";


interface FeedbackViewStateProps {
    feedbackList: Array<Feedback>;
}

interface FeedbackViewDispatchProps {
    addFeedback(feedback: Feedback): void;
}

const mapStateToProps = (state: RootState): FeedbackViewStateProps => ({
    feedbackList: state.feedback.list
});

const mapDispathToProps = (dispatch: Dispatch) => ({
    addFeedback: (feedback: Feedback) => dispatch(addFeedback(feedback)),
});

export const FeedbackView = connect<FeedbackViewStateProps, FeedbackViewDispatchProps, RouteComponentProps, RootState>(
    mapStateToProps,
    mapDispathToProps,
  )(FeedbackViewComponent);
