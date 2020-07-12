import React from "react";
import { Feedback } from "../../../redux/feedback/types/feedback";
import styles from "./feedback-item.module.scss";
import Rating from "../../common-ui/rating";

interface FeedbackItemProps {
    feedback: Feedback;
}

export const FeedbackItem: React.FC<FeedbackItemProps> = ({ feedback }) => {
    const name = feedback.name || "user";

    return (
        <div className={styles.feedbackItem}>
            <div className="mar-btm--xl">
                <div>
                    <strong className="text-white">
                    {name}
                    </strong>
                    <div className="text-sm mar-btm--xl">
                        {feedback.email}
                    </div>
                </div>
                <Rating value={feedback.rating} isActive={false} />
            </div>
            <div>{feedback.comment}</div>
        </div>
    );
};
