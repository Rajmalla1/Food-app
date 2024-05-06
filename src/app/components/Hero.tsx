'use client';
import React from 'react';
import Image from "next/image";
import CustomButton from './CustomButton';


const Hero = () => {
const handleClick = () => {

console.log("Searching for food...");
};


return (


<section className="h-[95vh] bg-cover w-screen bg-[url('/images/Hero.jpg')]">
<div className="hidden sm:flex sm:ml-20 sm:p-12 bg-cover bg-no-repeat bg-center">
<div className="pt-16 sm:pt-36 sm:pl-12 sm:pr-12 w-full">
<h1 className="text-green-500 sm:text-6xl text-2xl pt-4 pb-2 mb-2 sm:mb-10 font-bold ml-8 sm:ml-0">Discover Flavour at every corner!</h1>
<h2 className="pt-2 pb-2 mb-2 sm:text-2xl text-lg pl-8 sm:pl-0">Your ultimate neighbourhood food hub.</h2>
<div className="flex flex-col py-3 sm:pb-4 sm:pt-4 sm:pl-3 sm:pr-3 max-w-5xl mx-auto border rounded-md bg-white ml-3 sm:ml-0">
<div className="search-bar flex flex-col sm:flex-row items-center justify-center sm:justify-between max-w-5xl w-full">
<input
type="text"
placeholder="Type in something you’re craving right now"
className="rounded-lg py-3 px-6 border mb-3 sm:mb-0 border-gray-300 bg-white focus:outline-none focus:border-primary-blue flex-1 text-gray-400 sm:mr-3"
/>
<CustomButton
title="Find Food"
containerStyles="bg-green-500 border text-white rounded-lg py-3 px-6"
handleClick={handleClick}
/>
</div>
</div>
</div>
</div>

<div className="sm:hidden flex flex-col items-center justify-center h-full">
<div className="pt-16 sm:pt-36 sm:pl-12 sm:pr-12 w-full">
<h1 className="text-green-500 sm:text-6xl text-4xl pt-4 pb-2 mb-2 sm:mb-6 font-bold text-center">Discover Flavour at every corner!</h1>
<h2 className="pt-2 pb-2 mb-2 sm:text-lg text-sm text-center text-semibold">Your ultimate neighbourhood food hub.</h2>
<div className="search-bar flex flex-col sm:flex-row items-center justify-center">
<input
type="text"
placeholder="Type in something "
className="rounded-lg py-3 px-6 border mb-3 sm:mb-0 border-gray-300 bg-white focus:outline-none focus:border-primary-blue flex-1 text-gray-400 sm:mr-3"
/>
</div>
<div className="flex justify-center mt-2">
<CustomButton
title="Find Food"
containerStyles="bg-green-500 border text-white rounded-lg py-3 px-6"
handleClick={handleClick}
/>
</div>
</div>
</div>
</section>






);
};

export default Hero;