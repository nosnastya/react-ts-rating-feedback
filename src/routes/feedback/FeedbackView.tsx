import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Feedback } from "../../redux/feedback/types/feedback";

import Form from "../../components/feedback/form";
import FeedbackItem from "../../components/feedback/feedback-item";
import Graph from "../../components/feedback/graph";

import styles from "./feedback.module.scss";

interface FeedbackViewStateProps {
    feedbackList: Array<Feedback>;
}

interface FeedbackViewDispatchProps {
    addFeedback(feedback: Feedback): void;
}


type FeedbackViewProps = RouteComponentProps & FeedbackViewStateProps & FeedbackViewDispatchProps;


export class FeedbackViewComponent extends React.Component<FeedbackViewProps> {
    // eslint-disable-next-line
    constructor(props: FeedbackViewProps) {
        super(props);
    }

  onFeedbackFormSubmit = (feedback: Feedback) => {
    this.props.addFeedback(feedback);
  };

  public render() {

    return (
        <div className={styles.mainWrapper}>
            <section className={styles.mainHeader}>
                <h1>Our reviews</h1>
            </section>
            <section className={styles.topSection}>
                <div className={styles.formWrapper}>
                    <Form onSubmit={this.onFeedbackFormSubmit}/>
                </div>
                <div className="disp-flex flex-align__center">
                    <Graph feedbackList={this.props.feedbackList} />
                </div>
            </section>
            <section className={`${styles.feedbackList}`}>
                <h3>Latest reviews:</h3>
                <div className="disp-flex flex-dir__column-rev">
                    {this.props.feedbackList.map((feedback) => (
                        <div key={feedback.id}>
                            <FeedbackItem feedback={feedback} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
  }
};
