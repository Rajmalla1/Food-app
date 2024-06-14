'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CustomButton from '../components/CustomButton';

interface User {
    email: string;
}

const ForgotPassword = () => {
    const [user, setUser] = useState<User>(
      { email: "" });

    const onForgotPassword = async () => {
        // password reset logic here
    };

    return (
        <section className='w-full h-screen flex flex-col md:flex-row bg-white'>
            <div className='hidden lg:block relative w-full md:w-1/2 h-96 md:h-full overflow-hidden flex-wrap'>
                <div className='absolute top-[45%] left-[30%] lg:left-[20%] xl:left-[30%] flex flex-col'>
                    <h1 className='text-white font-bold text-3xl xl:text-3xl z-10 text-center md:text-center'>
                        Lost your Flavor?
                    </h1>
                    <h1 className='text-white font-bold text-3xl z-10 text-center md:text-center'>
                        Let's Get it Back on Track!
                    </h1>
                </div>
                <Image
                    src="/images/forgotpassword.jpg"
                    alt="Food Image"
                    layout="fill"
                    className="object-cover brightness-95"
                />
            </div>

            <div className='w-full lg:w-1/2 h-full flex flex-col p-10 items-center lg:items-start lg:pt-10 lg:ml-10 justify-center bg-white'>
                <div className='items-start justify-start -ml-4 -mb-4 lg:mt-60'>
                    <Image
                        src="/images/logo-Photoroom.png-Photoroom.png"
                        alt="Logo"
                        width={100}
                        height={100}
                    />
                </div>
                <h2 className='text-slate-600 pt-4 text-base sm:text-lg md:text-3xl font-bold'>
                    Recover Password
                </h2>
                <p className='text-slate-500 text-sm sm:text-base md:text-base pt-2'>
                    Request an Email reset link
                </p>

                <label htmlFor="email" className="block mb-1 text-sm md:text-base font-medium text-slate-400 mt-8 pb-1">
                    Email
                </label>
                <input
                    type="text"
                    id="email"
                    className="bg-white border-2 border-slate-400 text-gray-900 text-sm rounded-lg focus:border-slate-500 block w-3/4 p-3"
                    placeholder="Enter Address"
                    required
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                />

                <CustomButton
                    title="Submit"
                    containerStyles="bg-green-500 border text-white rounded-lg mt-4 w-3/4 h-12 hover:bg-green-600 hover:text-white"
                    handleClick={onForgotPassword}
                />

                

                <div className='flex flex-row sm:flex-row items-center justify-center lg:justify-start sm:justify-center mt-4 md:pt-10 md:-ml-2 xl:ml-0 md:items-center flex-wrap md:flex-nowrap md:mt-auto lg:w-3/4'>
                    <h1 className='text-slate-500 text-xs md:text-sm md:mr-1 lg:mr-2 cursor-pointer hover:underline font-bold' onClick={onForgotPassword}>
                        Having issue?
                    </h1>

                    <Link href="mailto:hello@gmail.com" className='text-green-500 text-xs md:text-sm cursor-pointer pl-2 lg:-ml-1 md:pl-1 hover:underline font-bold'>
                        hello@tatotatogmail.com
                    </Link>

                    <Link href="/terms" className='text-slate-500 text-xs md:text-sm ml-2 md:ml-4 cursor-pointer hover:underline font-semibold'>
                        Terms and Conditions
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;
