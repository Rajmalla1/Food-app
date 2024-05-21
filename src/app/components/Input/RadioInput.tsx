import React from 'react';

interface RadioInput {
    label: string;
    type: "text" | "email" | "password" | "number" | "tel" | "radio";
    name?: string;
    id?: string;
}

const InputField: React.FC<RadioInput> = ({ label, type, name, id }) => {
  return (
    <div className="flex gap-3 border-2 rounded-xl px-4 py-6 pr-60 py-3 my-3 shadow-md shadow-2xl">
        <input
            type={type}
            name={name} 
            id={id} 
        />
        <label className="font-semibold" htmlFor={id?.toString()}>
            {label}
        </label>
    </div>
  );
};

export default InputField;
