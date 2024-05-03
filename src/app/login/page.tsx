'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CustomButton from '../components/CustomButton';

interface User {
email: string;
password: string;
}

const loginpage = () => {
const [user, setUser] = useState<User>({
email: "",
password: ""
});

const onLogin = async () => {

};

function handleClick(): void {
throw new Error('Function not implemented.');
}

return (
<section className='w-full h-screen flex flex-col md:flex-row'>

<div className='hidden md:block relative w-full md:w-1/2 h-96 md:h-full overflow-hidden'>
<div className='absolute top-[45%] left-[30%] sm:left-[30%] flex flex-col'>
<h1 className='text-white font-bold first-letter text-base md:text-xl lg:text-2xl xl:text-3xl z-10 text-center'>Welcome Back! Let's Savor</h1>
<h1 className='text-white font-bold first-letter text-base md:text-xl lg:text-2xl xl:text-3xl z-10 text-center'>the Flavor Together!</h1>
</div>
<Image
src="/images/login.jpg"
alt="Food Image"
layout="fill"
className="object-cover brightness-75"
/>
</div>

<div className='w-full md:w-1/2 h-full flex flex-col p-10 text-white items-center md:items-start'>
<h1 className='text-2xl md:text-4xl text-green-500 font-extrabold mt-20 pt-20'>Tat Tato</h1>
<h2 className='text-slate-600 pt-4 text-3xl font-bold'>Welcome Back!</h2>
<p className='text-slate-600 pt-2'>Don't have an account?<Link className='text-green-500 ml-2 font-bold hover:text-green-600' href={'/signup'}>SignUp</Link></p>

<label htmlFor="email" className="block mb-1 text-sm font-medium text-slate-400 mt-8">
Email
</label>
<input
type="text"
id="email"
className="bg-white border-2 border-slate-400 text-gray-900 text-sm rounded-lg focus:border-slate-500 block w-3/4 p-3"
placeholder="Email"
required
onChange={(e) => setUser({ ...user, email: e.target.value })}
/>

<label htmlFor="password" className="block mb-1 text-sm font-medium text-slate-400 mt-4">
Password
</label>
<input
type="password"
id="password"
className="bg-white border-2 border-slate-400 text-gray-900 text-sm rounded-lg focus:border-slate-500 block w-3/4 p-3"
placeholder="Password"
required
onChange={(e) => setUser({ ...user, password: e.target.value })}
/>

<div className='flex flex-row items-center md:justify-between pt-5 w-3/4'>
<div className="flex items-center">
<input
type="checkbox"
id="agree-terms"
value="agree"
className="w-5 h-5 pr-1 rounded bg-gray-100 border-gray-300 focus:border-2 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
/>
<p className='text-slate-600 ml-2'>Remember Me</p>
</div>
<Link href={'/forgotpassword'} className='text-green-500 hover:underline hover:text-green-700'>Forgot Password?</Link>
</div>

<CustomButton
title="Login"
containerStyles="bg-green-500 border text-white rounded-lg mt-4 w-3/4 h-12 hover:bg-green-600 hover:text-white pt-2 "
handleClick={handleClick}
/>

<p className='text-slate-600 pt-2 '>Don't have an Account? <Link className='text-green-500 ml-2 font-bold hover:text-green-600 hover:underline' href={'/forgotPassword'}>Signup</Link></p>

<div className='flex flex-row items-center mt-4 md:mt-auto md:flex-row md:items-center'>
<h1 className='text-slate-500 text-sm md:mr-4 cursor-pointer hover:underline font-bold' onClick={() => { onLogin }}>Need Help?</h1>
<Link href="mailto:hello@gmail.com" className='text-green-500 text-md cursor-pointer hover:underline font-bold '>hello@gmail.com</Link>
<Link href="/terms" className='text-slate-500 text-sm ml-2 md:ml-4 cursor-pointer hover:underline font-bold'>Terms & Conditions</Link>
</div>
</div>
</section>
);
};

export default loginpage;