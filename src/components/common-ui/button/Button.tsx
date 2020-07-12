import React from "react";

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
        <button className={`button ${className}`} onClick={onClick} type={type}>
            {buttonText}
        </button>
    );
};
