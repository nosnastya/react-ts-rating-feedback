import React, { FC } from "react";

export interface TextareaProps {
    value: string;
    className?: string;
    error?: string;
    placeholder?: string;
    onChange?(e: React.ChangeEvent<HTMLTextAreaElement>): void;
}

export const Textarea: FC<TextareaProps> = ({ className, onChange, placeholder, error, value = "" }) => (
    <>
        <textarea
            className={`${className}`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
        {error ? <p className="text-sm text-error"> {error} </p> : null }
    </>
);
