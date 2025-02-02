'use client';
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import CustomButton from './CustomButton';
import { useRouter } from 'next/navigation'

interface FoodItem{
  id:number;
  name:  string;
  description: string
}

const Hero = () => {
  const handleClick = () => {
    console.log("Searching for food...");
  };

  const [data, setData] = useState<FoodItem[]>([]); // for storing fetched data
  const [searchInput, setSearchInput] = useState(''); // for storing search input from user
  const [filteredResults, setFilteredResults] = useState<FoodItem[]>([]); // for storing filtered result
  const router = useRouter(); // Initialize the router
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/search.json');
        const result = await response.json();
        setData(result);
        console.log('Data fetched');
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

    const handleItemClick = (id: any) => {
    router.push(`/food/page?id=${id}`);
  };

 
  const searchClick = () => {
    console.log("Searching for food...");
    const results = data.filter(item =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredResults(results);
  };

  return (
    <section className="sm:h-[95vh] bg-cover w-screen">
      <style jsx>{`
        .bg-image {
          background-image: url('/images/Hero.jpg');
          background-size: cover;
          background-position: center; 
          height: 100%; 
          width: 100%; 
          filter: brightness(90%);
        }
        @media (max-width: 640px) {
          .bg-image {
            display: none;
          }
        }
      `}</style>
      <div className="bg-image w-screen h-full">
        <div className="hidden sm:flex sm:ml-20 sm:p-12 bg-cover bg-no-repeat bg-center">
          <div className="pt-16 xl:pt-80 sm:mt-20 sm:pl-10 sm:pr-12 w-full">
            <h1 className="text-green-500 sm:text-6xl text-2xl pt-4 pb-1 mb-1 sm:mb-7 font-extrabold ml-8 sm:ml-0">Discover Flavour at every corner!</h1>
            <h2 className="pt-0 pb-8 mb-2 sm:text-3xl text-lg pl-8 sm:pl-0 text-white font-medium">Your ultimate neighbourhood food hub,</h2>
            <div className="flex flex-col py-3 sm:pb-4 sm:pt-4 sm:pl-3 sm:pr-3 max-w-5xl mx-auto border rounded-xl bg-white ml-3 sm:ml-0">
              <div className="search-bar flex flex-col sm:flex-row items-center justify-center sm:justify-between max-w-5xl w-full bg-white">
              <input
               type="text"
                placeholder="Type in something"
                value={searchInput}
                onChange={handleSearchInput} 
                className="rounded-lg py-2 px-4 border mb-2 sm:mb-0 border-gray-300 bg-white focus:outline-none focus:border-primary-blue flex-1 text-gray-400 sm:mr-2"
                />
                <CustomButton
                  title="Find Food"
                  containerStyles="bg-green-500 border text-sm md:text-base md:font-bold text-white rounded-lg py-1 sm:py-3 lg:py-4\3 px-1 sm:px-1 md:px-5 md:ml-5 md:mr-2 border border-green-500 "
                  handleClick={searchClick}
                />

              </div>
             
      {filteredResults.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Search Results:</h3>
          <ul>
            {filteredResults.map(item => (
              <li  key={item.id} onClick={()=>  handleItemClick(item.id)} >
                <h4 className="font-semibold hover:cursor-pointer">{item.name}</h4>
                
              </li>
            ))}
          </ul>
        </div>
      )}
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden w-screen h-[45vh] relative ">


  <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/images/Hero.jpg')"}}></div>
  

  <div className="flex flex-col items-center justify-center  h-full">
    
    <div className="sm:pl-6 sm:pr-6 w-full z-10"> 
      <h1 className="text-green-500 sm:text-4xl text-3xl pt-2 pb-2 mb-2 sm:mb-4 font-bold text-center">Discover Flavour at every corner!</h1>
      <h2 className="pt-1 pb-1 mb-1 sm:text-lg text-sm text-center font-semibold text-white">Your ultimate neighbourhood food hub.</h2>
      <div className="search-bar flex flex-col sm:flex-row items-center justify-center">
        <input
          type="text"
          placeholder="Type in something"
          value={searchInput}
          onChange={handleSearchInput}
          className="rounded-lg py-2 px-4 border mb-2 sm:mb-0 border-gray-300 bg-white focus:outline-none focus:border-primary-blue flex-1 text-gray-400 sm:mr-2"
        />
      </div>
      <div className="flex justify-center mt-0"> 
        <CustomButton
          title="Find Food"
          containerStyles="bg-green-500 border  text-sm text-white rounded-lg py-2 px-3 "
          handleClick={handleClick}
        />
      </div>
      {filteredResults.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-bold">Search Results:</h3>
                  <ul>
                    {filteredResults.map(item => (
                      <li key={item.id}>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p>{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
    </div>
  </div>
</div>



    </section>
  );
};

export default Hero;

