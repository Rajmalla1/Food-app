"use client";
import React from 'react';
import CustomButton from './components/CustomButton';

const MaintenancePage: React.FC = () => {
    function handleClick(): void {

    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-screen-lg w-full px-4 sm:px-8 md:px-16"> 
                <h1 className="text-base md:text-2xl font-bold mb-8 text-gray-700">Oh No!!</h1> 
                <p className=" text-xl md:text-4xl sm:mb-6 font-extrabold text-slate-900">Sorry!!</p> 
                <div className="sm:mb-4">
                    <p className="text-xl  md:text-4xl font-extrabold text-green-500">Site under maintenance</p>
                </div>
                <p className="text-xs sm:text-base  pb-7 pt-4 mb-6 text-slate-600">We're currently undergoing maintenance to improve your experience. <br /> <span> Please bear with us while we work to make things better.</span></p>


                <CustomButton
                    title="Go back to home page"
                    containerStyles="bg-green-500 border text-white rounded-lg py-3 px-5 "
                    handleClick={handleClick}
                />
            </div>
        </div>
    );
};

export default MaintenancePage;