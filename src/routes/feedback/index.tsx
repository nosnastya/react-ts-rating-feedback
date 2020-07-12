import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Dispatch } from "redux";

import { addFeedback } from "../../redux/feedback/actions/add-feedback";
import { Feedback } from "../../redux/feedback/types/feedback";
import { RootState } from "../../redux/root/state";

import Form from "../../components/feedback/form";

import styles from "./feedback.module.scss";

interface FeedbackViewStateProps {
    feedbackList: Array<Feedback>;
}
const mapStateToProps = (state: RootState): FeedbackViewStateProps => ({
    feedbackList: state.feedback.list
});

const mapDispathToProps = (dispatch: Dispatch) => ({
    addFeedback: (feedback: Feedback) => dispatch(addFeedback(feedback)),
});

type FeedbackViewProps = RouteComponentProps & FeedbackViewStateProps & FeedbackViewDispatchProps;

interface FeedbackViewDispatchProps {
    addFeedback(feedback: Feedback): void;
}

class FeedbackViewComponent extends React.Component<FeedbackViewProps> {

  onFeedbackFormSubmit = (feedback: Feedback) => {
    this.props.addFeedback(feedback);
  };

  public render() {

    return (
        <div className={styles.mainWrapper}>
            <h1>Please leave your review here</h1>
            <div className="disp-flex">
                <Form onSubmit={this.onFeedbackFormSubmit}/>
            </div>
        </div>

    );
  }
}

export const FeedbackView = connect<FeedbackViewStateProps, FeedbackViewDispatchProps, RouteComponentProps, RootState>(
  mapStateToProps,
  mapDispathToProps,
)(FeedbackViewComponent);
