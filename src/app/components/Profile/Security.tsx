"use client";

import React, { useState } from "react";
import Image from "next/image";
import InputField from "../Input/InputField";
import Link from "next/link";

type Props = {};

export default function ({}: Props) {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match");
    } else {
      // Perform update password logic here
      setError("");
    }
  };

  return (
    <div>
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
          <form onSubmit={handleSubmit} className='flex-col'>
            <div className=''>
              <InputField
                label='Password'
                placeholder='Current Password'
                type='password'
              />
            </div>

            <div className='w-96'>
              <InputField
                label='New Password'
                placeholder='New Password'
                type='password'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className=''>
              <InputField
                label='Confirm Password'
                placeholder='Confirm Password'
                type='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {error && <div className='text-red-500 text-sm'>{error}</div>}

            <div className=''>
              <Link
                href='/forgot-password'
                className='text-sm font-semibold text-green-500 hover:text-green-600 hover:underline flex justify-end'
              >
                Forgot password?
              </Link>
            </div>

            <div className='bg-green-500 rounded-md p-2 font-semibold text-white text-center hover:bg-green-600 mt-4 flex justify-center'>
              <button type='submit'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
