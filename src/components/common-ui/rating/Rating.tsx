import React from "react";
import styles from "./rating.module.scss"
import IconStarEmpty from './icon-star-0.svg'
import IconStarFull from './icon-star-1.svg'

export interface RatingProps {
    value: number;
    className?: string;
    isActive?: boolean;
    error?: string;
    onChange?(value: number): void;
}

export class Rating extends React.Component<RatingProps> {
    render() {
        const { className, value: currentValue, isActive = true, error } = this.props;
        const stars = [1, 2, 3, 4, 5];

        return (
            <div className={`disp-flex ${className}`}>
                {stars.map((value) => {

                    return (
                    <div
                        key={value}
                        className={`${styles.star} ${!isActive && styles.activeStar}`}
                        onClick={() => isActive && this.props.onChange && this.props.onChange(value)}
                    >
                        <span className={styles.icon}>
                            {currentValue >= value ? <IconStarFull/> : <IconStarEmpty/>}
                        </span>
                    </div>
                    );
                })}
                {error ? <p className="text-sm text-error">error</p> : null }
            </div>
        );
    }
}
