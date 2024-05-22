import React from 'react';

interface FoodComponentProps {
  backgroundImage: string;
  foodName: string;
  foodLocation: string;
  deliveryStatus: boolean;
  rating: number;
  foodCost: number;
  reviewRating: number; 
}

const FoodComponent: React.FC<FoodComponentProps> = ({
  backgroundImage,
  foodName,
  foodLocation,
  deliveryStatus,
  rating,
  foodCost,
  reviewRating 
}) => {
  return (
    <div className='relative rounded-2xl rounded-b-2xl w-72 sm:w-80 md:w-96 h-96 sm:h-80 md:h-96 lg:w-[28rem] hover:shadow-lg hover:transform transition ease-in-out delay-50 hover:cursor-pointer hover:-translate-y-1 border border-gray-400 '>
      <div
        className="bg-cover border border-gray-400 relative rounded-2xl"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '90%',
        }}
      >
      </div>
      <div className="absolute left-0 bottom-0 rounded-b-2xl w-full h-30 p-4 bg-white ">
        <h2 className='text-slate-700 font-medium text-base md:text-2xl text-left'>{foodName}</h2>
        <h3 className='text-sm md:text-base text-slate-600 text-left'>{foodLocation}</h3>
        <h3 className='text-sm md:text-base flex items-center text-green-700 font-semibold'>
          {deliveryStatus ? (
            <>
              Free
            </>
          ) : (
            <>
              Paid
            </>
          )}
        </h3>
      </div>

      <div className='absolute right-0 bottom-0 w-full h-30 p-4 flex flex-col justify-end items-end '>
        <div className='flex gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
          <span className='text-sm md:text-base'>{reviewRating}/5</span>
        </div>
        <h3 className='text-sm md:text-base'>Out of {rating}</h3>
        <h2 className='text-sm md:text-base font-semibold'>Rs. {foodCost}</h2>
      </div>
    </div>
  );
};

export default FoodComponent;
