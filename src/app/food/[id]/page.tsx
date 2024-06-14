'use client'
import NavBar from '@/app/components/Navbar'
import React from 'react'

const Herob = () => {
  return (
    
    <section className='sm:h-[30vh] bg-cover w-screen'>
        <NavBar />
        <style jsx>{`
        .bg-image {
          background-image: url('/images/Hero.jpg');
          background-size: 100% auto; /* Full width, auto height */
          background-position: center; 
          background-repeat: no-repeat; /* Prevents image repetition */
          height: 100%; 
          width: 100%; 
          filter: brightness(90%);
        }
        @media (max-width: 640px) {
          .bg-image {
            display: none;
          }
        }
        
        `}
        </style>
        <div className='bg-image w-full h-full'>
        </div>
        <div>
            <h1  className='flex justify-center mt-10 font-medium text-green-500 xl:text-4xl'> Food Details </h1>
            

            
          </div>
    </section>
  )
}

export default Herob
