import React, { FC } from "react";

export interface TextareaProps {
    value: string;
    className?: string;
    error?: string;
    placeholder?: string;
    name?: string;
    rows?: number;
    onChange?(e: React.ChangeEvent<HTMLTextAreaElement>): void;
}

export const Textarea: FC<TextareaProps> = ({ className, onChange, placeholder, error, name, rows=4, value = "" }) => (
    <>
        <textarea
            className={`${className}`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            rows={rows}
        />
        {error ? <p className="text-sm text-error"> {error} </p> : null }
    </>
);
