'use client'
import React, { useState, useEffect, useRef } from 'react';

interface ReviewComponentProps {
    date: Date;
    starRating: number;
    review: string;
    image: string;
    userName: string;
}

const ReviewComponent: React.FC<ReviewComponentProps> = ({ 
    date, starRating, review, image, userName 
}) => {
    const [expanded, setExpanded] = useState(false);
    const [isLongReview, setIsLongReview] = useState(false);
    const reviewRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (reviewRef.current) {
            setIsLongReview(reviewRef.current.scrollHeight > reviewRef.current.offsetHeight);
        }
    }, [review]);

    const zeroPad = (num: number) => {
        return num < 10 ? `0${num}` : num.toString();
    }
    const formattedDate = `${zeroPad(date.getMonth() + 1)}/${zeroPad(date.getDate())}/${date.getFullYear()}`;

    const starRatingFormatted  = starRating.toFixed(1);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='relative rounded-2xl w-full sm:w-80 md:w-96 lg:w-[28rem] 2xl:w-[28rem] hover:shadow-2xl hover:transform transition ease-in-out delay-50 hover:cursor-pointer hover:-translate-y-1 border border-gray-300 flex flex-col font-semibold shadow-lg'>
            <div className='flex-grow mx-6 my-6 text-sm md:text-base text-green-500'>
                <div className='flex'>
                    <p>{formattedDate}</p>
                </div>
                <div className='flex gap-2 mt-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 md:h-7 md:w-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                    <p className='text-slate-500 text-base'>{starRatingFormatted}</p>
                </div>
                <div className='flex text-sm text-start text-slate-400 mt-3' style={{ minHeight: '80px' }}>
                    <div ref={reviewRef} className={`overflow-hidden ${expanded ? '' : 'line-clamp-5'}`} style={{ wordWrap: 'break-word' }}>
                        <p>{review}</p>
                    </div>
                </div>
                {isLongReview && (
                    <div className="flex mt-2 text-xs font-semibold">
                        <button onClick={toggleExpanded} className="text-green-500 underline">
                            {expanded ? 'See Less' : 'See More'}
                        </button>
                    </div>
                )}
            </div>
            <div className='mx-6 mb-6 flex gap-3'>
                <div className='w-11 h-11 bg-gray-200 rounded-full' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div>
                    <p className='text-slate-500 mt-2'>{userName}</p>
                </div>
            </div>
        </div>
    );
}

export default ReviewComponent;
