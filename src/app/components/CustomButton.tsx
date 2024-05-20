"use client";
import Image from "next/image";
import React from "react";

interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`${containerStyles}`}
      onClick={handleClick}
    >
      <span className={"flex-1"}>{title}</span>
    </button>
  );
};

export default CustomButton;
