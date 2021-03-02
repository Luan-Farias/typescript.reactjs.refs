import React, { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: React.RefForwardingComponent<HTMLInputElement,InputProps> = ({ name, label, ...props}, ref) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input
                ref={ref}
                type="text"
                {...props}
            />
        </div>
    );
}

export default forwardRef(Input);
