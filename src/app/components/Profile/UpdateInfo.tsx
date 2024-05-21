import React from "react";
import InputField from "../Input/InputField";
import Image from "next/image";

export default function Profile() {
  return (
    <div className='bg-white'>
      <div className='gap-20 m-10 flex justify-center'>
        {/* user image and email info */}
        <div className='flex-col border-2 p-20 w-fit rounded-md m-2 shadow-2xl'>
          <Image
            src={""}
            alt=''
            className='cursor-pointer size-24 rounded-3xl my-6 mx-auto'
          />
          <h1 className='font-semibold text-gray-700 text-center text-3xl'>
            Your Name
          </h1>
          <p className='font-semibold text-gray-700 text-center'>
            your@gmail.com
          </p>
        </div>

        {/* Form */}
        <div className='flex-col border-2 p-5 rounded-md w-fit shadow-2xl'>
          <div className='w-96'>
            <InputField
              label='First name'
              placeholder='First name'
              type='text'
            />
          </div>

          <div className=''>
            <InputField label='Last name' placeholder='Last name' type='text' />
          </div>

          <div className=''>
            <InputField
              label='Phone number'
              placeholder='Phone number'
              type='tel'
            />
          </div>

          <div className=''>
            <InputField
              label='Email'
              placeholder='your@gmail.com'
              type='email'
            />
          </div>

          <div className=' bg-green-500 rounded-md p-2 font-semibold text-white text-center mt-2 hover:bg-green-600'>
            <button>Update</button>
          </div>
        </div>
      </div>
    </div>
  );
}
