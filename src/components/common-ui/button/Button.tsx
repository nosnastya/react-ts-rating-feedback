import React from "react";
import styles from "./button.module.scss";

type buttonType =
"submit"
| "reset"
| "button";

interface ButtonProps {
    buttonText: string;
    className?: string;
    type?: buttonType;
    onClick?(): void;
}

export const Button: React.FC<ButtonProps> = ({ buttonText, className, type = "button", onClick }) => {
    return (
        <button className={`${styles.button} ${className}`} onClick={onClick} type={type}>
            {buttonText}
        </button>
    );
};
