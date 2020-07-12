import React, { FC } from "react";
import styles from  './input.module.scss'

interface InputProps {
    className?: string;
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
    value?: string;
    type?: string;
    placeholder?: string;
    error?: string;
}

export const Input: FC<InputProps> = ({ className, onChange, placeholder, error, value = "", type = "text" }) => (
    <>
        <input
            className={`${styles.input} ${className}`}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
        {error ? <p className="text-sm text-error">error</p> : null }
    </>
);
