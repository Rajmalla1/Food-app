import React from "react";

interface RadioButtonProps {
  label: string;
  type: "text" | "email" | "password" | "number" | "tel" | "radio";
  name?: string;
  id?: string;
  paragraph: string; // Add the paragraph prop
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  type,
  name,
  id,
  paragraph,
}) => {
  return (
    <div className='flex-col gap-3 border-2 rounded-xl px-8 pr-60 py-6 my-3 shadow-md shadow-2xl'>
      <input type={type} name={name} id={id} />
      <label className='font-semibold ml-1 text-xl' htmlFor={id?.toString()}>
        {label}
      </label>
      {paragraph && <p className='ml-6'>{paragraph}</p>}
    </div>
  );
};

export default RadioButton;
