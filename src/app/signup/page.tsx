"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../components/CustomButton";

interface User {
  Name: string;
  email: string;
  password: string;
}

const SignupPage = () => {
  const [user, setUser] = useState<User>({
    Name: "",
    email: "",
    password: "",
  });

  const onSignup = async () => {

  };

  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <section className="w-full h-screen flex flex-col md:flex-row bg-white">
      <div className="hidden lg:block relative w-full md:w-1/2 h-96 md:h-full overflow-hidden">
        <div className="absolute top-[45%] left-[10%] lg:left-[20%]  2xl:left-[30%]  flex flex-col">
          <h1
            className="text-white font-bold first-letter text-base md:text-xl lg:text-2xl xl:text-3xl z-10  text-center">Taste
            the Convenience: Sign Up </h1>
          <h1
            className="text-white font-bold first-letter text-base md:text-xl lg:text-2xl xl:text-3xl z-10 text-center">For
            Flavor at Your Door!</h1>
        </div>
        <Image
          src="/images/signup.jpg"
          alt="Food Image"
          layout="fill"
          className="object-cover brightness-75" />
      </div>
      <div
        className="w-full lg:w-1/2 h-full flex flex-col p-10 text-white items-center lg:items-start lg:pt-10 lg:ml-10 justify-center bg-white">
        <div className="items-start justify-start mt-10 -mb-8 md:-ml-4 md:-mb-6">
          <Image
            src="/images/logo-Photoroom.png-Photoroom.png"
            alt="Logo"
            width={100}
            height={50}
          />
        </div>
        <h2 className="text-slate-600 pt-4 text-xl md:text-3xl font-bold">Get Started</h2>
        <p className="text-slate-600 text-sm md:text-base pt-2 text-center lg:text-start">Already have an account?<Link
          className="text-green-500 ml-2 font-bold hover:text-green-600" href={"/login"}>Sign In</Link></p>
        <label htmlFor="Name" className="block mb-2 text-sm lg:text-base font-medium text-slate-400 mt-9">
          Name
        </label>
        <input
          type="text"
          id="Name"
          className="bg-white border-2 lg:text-base border-slate-400 text-gray-900 text-sm rounded-lg focus:border-slate-500 block w-3/4 p-3"
          placeholder="Enter your full name"
          required
          onChange={(e) => setUser({ ...user, Name: e.target.value })}
        />

        <label htmlFor="email" className="block mb-2 text-sm font-medium lg:text-base text-slate-400 mt-4">
          Email Address
        </label>
        <input
          type="text"
          id="email"
          className="bg-white border-2 border-slate-400  text-gray-900 text-sm rounded-lg focus:border-slate-500 block w-3/4 p-3"
          placeholder="Enter your email address"
          required
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="password" className="block mb-2 text-sm font-medium lg:text-base text-slate-400 mt-4">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="bg-white border-2 border-slate-400 text-gray-900 text-sm rounded-lg focus:border-slate-500 block w-3/4 p-3"
          placeholder="Enter a strong password"
          required
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <div className="flex flex-row items-center mt-10 lg:mt-20  ">
          <input
            type="checkbox"
            id="agree-terms"
            value="agree"
            className="md:w-5 md:h-5 w-3 h-4 md:pr-1 p-0 rounded-full bg-gray-100 border-gray-300 focus:border-2 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="agree-terms" className="text-slate-500 md:text-base text-xs ml-2">
            I agree to
            <Link href="/terms"
                  className="text-green-500 md:text-base font-semibold text-xs px-2 font-semi hover:underline hover:text-green-600">
              Terms <span className="text-slate-400 text-xs md:text-base px-1">&</span> Policies
            </Link>

          </label>
        </div>
        <CustomButton
          title="Sign-Up"
          containerStyles="bg-green-500 font-semibold  border text-white rounded-lg mt-7  w-3/4 h-12 hover:bg-green-600 hover:text-white"
          handleClick={handleClick}
        />

        <div
          className="flex flex-row sm:flex-row items-center justify-center lg:justify-start sm:justify-center mt-4 md:pt-10 md:-ml-2 xl:ml-0 md:items-center flex-wrap md:flex-nowrap md:mt-auto lg:w-3/4">
          <h1 className="text-slate-500 text-xs md:text-sm md:mr-1 lg:mr-2 cursor-pointer hover:underline font-bold"
              onClick={() => {
                onSignup;
              }}>Having issue?</h1>

          <Link href="mailto:hello@gmail.com"
                className="text-green-500 text-xs md:text-sm cursor-pointer pl-2 lg:-ml-1  md:pl-1 hover:underline font-bold">hello@tatotatogmail.com</Link>


          <Link href="/terms"
                className="text-slate-500 text-xs md:text-sm ml-2 md:ml-4 cursor-pointer hover:underline font-semibold">Terms
            and Conditions</Link>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
