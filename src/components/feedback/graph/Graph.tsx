import React from "react";
import { defaults, Line } from "react-chartjs-2";
import { Feedback } from "../../../redux/feedback/types/feedback";
import { convertDate } from "../../../helpers/convert-date"

interface GraphProps {
    feedbackList: Array<Feedback>;
}

export class Graph extends React.Component<GraphProps> {
    render() {
        const labels = this.props.feedbackList.map((feedback) => convertDate(feedback.createdAt));
        const data = this.props.feedbackList.reduce<Array<number>>((list, feedback) => {
            list.push(feedback.rating)
            return list;
        }, []);

        defaults.global.defaultFontColor = '#92abcf';

        return (
        <div className="chart">
            <Line
            data={{
                labels,
                datasets: [
                {
                    data,
                    backgroundColor: "rgba(17, 236, 229, 0.3)",
                    borderColor: "rgba(17, 236, 229, 1)",
                    borderWidth: 1
                },
                ],
            }}
            options={{
                legend: {
                display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            max: 5,
                            min: 0,
                            beginAtZero: true,
                            stepSize: 1
                        },
                    }]
                }
            }}
            />
        </div>
        );
    }
}
