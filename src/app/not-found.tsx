"use client";
import React from 'react';
import CustomButton from './components/CustomButton';

const NotFoundPage: React.FC = () => {
    function handleClick(): void {

    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-screen-lg w-full px-4 sm:px-8 md:px-16">
                <h1 className="text-3xl font-bold mb-8 text-gray-700">Oh No!!</h1>
                <p className="text-3xl mb-6 font-extrabold text-slate-900">Error <span
                    className="text-3xl text-gray-300 bg-opacity-50 px-2">404</span></p> {/* Increased margin bottom */}
                <div className="mb-8">
                    <p className="text-3xl font-extrabold text-green-500">Page Not found</p>
                </div>
                <p className="pb-4 pt-6 text-slate-600">Oops! Looks like you&apos;ve stumbled upon a page that
                    doesn&apos;t exist.
                    But don&apos;t worry, <br/> <span>We&apos;re here to help you get back on track</span></p>

                <CustomButton
                    title="Go back to home page"
                    containerStyles="bg-green-500 border text-white rounded-lg py-3 px-5"
                    handleClick={handleClick}
                />
            </div>
        </div>
    );
};

export default NotFoundPage;
