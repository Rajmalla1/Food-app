import React from "react";
import RadioButton from "../Input/RadioButton";

type Props = {};

export default function ({}: Props) {
  return (
    <div>
      <div className='m-5 my-20 flex-col w-fit px-8 py-5 border-2 rounded-xl shadow-md'>
        <h1 className='text-center font-semibold text-gray-700 text-3xl'>
          Delivery or Pickup?
        </h1>
        <div className='my-5'>
          <RadioButton
            label={"Delivery"}
            type={"radio"}
            paragraph={"Enjoy Delicious food in your comfort zone."}
            id='order'
            name='order'
          />
        </div>

        <div className='my-5'>
          <RadioButton
            label={"Pickup"}
            type={"radio"}
            paragraph={"Receive your food from your prefered tattato outlet"}
            id='order'
            name='order'
          />
        </div>
      </div>
    </div>
  );
}
