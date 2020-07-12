import React, { FC } from "react";
import styles from  './input.module.scss'

interface InputProps {
    className?: string;
    value?: string;
    type?: string;
    placeholder?: string;
    error?: string;
    name?: string;
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const Input: FC<InputProps> = ({ className, onChange, placeholder, error, name, value = "", type = "text" }) => (
    <>
        <input
            className={`${styles.input} ${className}`}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
        />
        {error ? <p className="text-sm text-error">{error}</p> : null }
    </>
);
