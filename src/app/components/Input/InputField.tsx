import React from "react";

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  type: "text" | "email" | "password" | "number" | "tel" | "radio";
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string | number;
  id?: string | number;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type,
  value,
  onChange,
}) => {
  return (
    <div className='mb-4'>
      <label
        className='block text-gray-700 text-sm font-medium mb-1 flex text-nowrap'
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className='w-full h-10 px-2 py-2 text-base rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-green-500'
        type={type}
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
