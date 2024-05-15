import React from "react";
import RadioButton from "../Input/RadioButton";

type Props = {};

export default function ({}: Props) {
  return (
    <div>
      <div className='m-5 flex-col w-fit px-8 py-5 border-2 rounded-xl shadow-md'>
        <h1 className='text-center font-semibold text-gray-700 text-3xl'>
          How will you like to Pay?
        </h1>
        <div className='my-5'>
          <RadioButton
            label={"Cash on Delivery"}
            type={"radio"}
            paragraph={"Pay with cash when your order is delivered."}
          />
        </div>

        <div className='my-5'>
          <RadioButton
            label={"Pay with Khalti"}
            type={"radio"}
            paragraph={"Use khalti to make seamless and secure payment."}
          />
        </div>
      </div>
    </div>
  );
}
