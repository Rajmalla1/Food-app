'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import CustomButton from './CustomButton'; 
import {BsList, BsX} from "react-icons/bs"


interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const toggleMObileMenu =() =>{
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(()=>{
    let handler = () =>{
      setIsMobileMenuOpen(false);
    }
  })






  return (
    <header className="w-full absolute z-10 flex justify-between">

        <div className='sm:ml-20 lg:justify-start ml-6 cursor-pointer'>
        <Image
  src="/images/logo.png" 
  alt="Your Logo"
  width={100} 
  height={50} 
  layout="fixed"
/>

        </div>


        <div className="space-x-6  gap-2 hidden lg:flex my-auto font-semibold text-lg mt-7 lg:pl-40">

          <Link className=' text-xl text-white hover:text-green-400' href={'/'}>Home</Link>
          <Link className=' text-xl text-white hover:text-green-400' href={'/Menu'}>Menu</Link>
        </div>


        <div className="hidden lg:flex space-x-4 my-auto mt-4">
            <div className=''>
          <CustomButton
            title="Log-In"
            containerStyles="border-2  mr-2 border-green-500 text-white font-bold rounded-lg py-3 px-5 bg-rgba(0, 0, 0, 0.5) hover:text-green-700 hover:border-green-700"
          />
          <CustomButton
            title="Register"
            containerStyles="bg-green-500  text-white rounded-lg py-3 px-5 mr-10 font-bold hover:bg-green-700"
          />
            </div>
            <div className='cursor-pointer' >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8 mt-3 mr-10 "
            color='white'
          >

            <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          </div>


        </div>


        <div className='lg:hidden flex flex-row items-center justify-center mt-1 sm:mt-1 md:mr-10 '>
  <CustomButton
    title="Log-In"
    containerStyles="border-2 mr-2 border-green-500 text-slate-600 font-bold rounded-lg py-3 px-2   sm:py-3 sm:px-4 bg-rgba(0, 0, 0, 0.5) text-sm sm:text-base   "
  />
  <CustomButton
    title="Register"
    containerStyles="bg-green-500 text-white rounded-lg py-3 px-2 sm:py-3 sm:px-4 mr-5 hover:bg-green-700 text-sm sm:text-base"
  />
</div>






        <div className='lg:hidden cursor-pointer mr-6 mt-8 md:mt-8 md:mr-10 ' onClick={toggleMObileMenu}>
                <BsList className='h-8 w-8 text-black' />
          </div>

          {isMobileMenuOpen && (
            <div className={`fixed top-10 right-0 w-[50%] sm:w-[40%] md:w-[30%] lg:hidden h-auto p-5 ${isMobileMenuOpen ? 'active' : 'inactive'}`}>
  <div className='absolute top-10 right-5 w-full h-3/2 rounded-3xl shadow-md bg-green-50'>
    <div className='flex justify-end items-center mt-4 mr-5'>
      <BsX className='h-8 w-8 text-black cursor-pointer' onClick={toggleMObileMenu} />
    </div>
    <div>
      <ul className='flex flex-col space-y-7 mt-[-1]  text-slate-500 font-semibold mb-7 justify-center items-center'>
        <li className='hover:underline rounded-md'>
          <Link href={'/Menu'}>Menu</Link>
        </li>
        <li className='hover:underline rounded-md' >
          <Link href={'/Home'}>Home</Link>
        </li>
        <li className='hover:underline rounded-md' >
          <Link href={'/cart'}>Add to cart</Link>
        </li>
      </ul> 
    </div>
  </div>
</div>


)}







    </header>

  );
};

export default NavBar;