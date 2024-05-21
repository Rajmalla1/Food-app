import React from "react";
import { LuPencil } from "react-icons/lu";

type Props = {};

export default function Address({}: Props) {
  return (
    <div className='p-8 border-2 rounded-xl shadow-md m-5 w-fit'>
      <div className='flex'>
        <div>
          <h1 className='text-3xl font-bold'>Address</h1>
        </div>
        <div className='pl-60 my-auto text-green-500'>
          <button className='text-2xl font-semibold flex gap-3'>
            <LuPencil className='my-auto' />
            Edit
          </button>
        </div>
      </div>

      <div className='flex-col pt-16'>
        <div className='flex'>
          <h1 className='text-2xl font-bold'>Name Here</h1>
        </div>
        <div className='flex'>
          <h2 className='text-xl font-semibold'>Deliver Address</h2>
        </div>
      </div>
    </div>
  );
}
