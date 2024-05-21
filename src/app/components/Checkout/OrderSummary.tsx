import React from "react";
import Image from "next/image";
import Counter from "./Counter";
import { MdDeleteForever } from "react-icons/md";

type Props = {};

export default function OrderSummary({}: Props) {
  return (
    <div>
      <div className='w-fit p-8 border-2 rounded-xl shadow-md m-5'>
        <div>
          <h1 className='text-3xl font-bold'>Order Summary</h1>
        </div>

        {/* Order image and description */}
        <div className='flex my-10'>
          <div>
            <Image
              src={""}
              alt='food image'
              height={100}
              width={80}
              className='border border-gray-300 rounded-lg'
            />
          </div>
          <div className='flex-col pl-4 justify-around pt-3'>
            {/* Description and delete button */}
            <div className='flex'>
              <div>
                <h3 className='text-2xl font-medium text-wrap'>
                  Classic Chicken Burger
                </h3>
              </div>

              <div>
                <button className='pl-10'>
                  <MdDeleteForever className='size-8 text-red-500 hover:text-red-700' />
                </button>
              </div>
            </div>

            <div className='flex justify-between pt-6'>
              <div>
                <Counter />
              </div>

              <div>
                <p className='mt-2 font-semibold text-green-500 text-2xl'>
                  Rs.100
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Price detail */}
        <div className='bg-green-100 p-3 rounded-lg'>
          <div className='flex justify-between font-semibold text-xl'>
            <h2>Sub Total</h2>
            <h2>Rs.150</h2>
          </div>
          <div className='flex justify-between font-semibold text-xl'>
            <h2>Delivery Fee</h2>
            <h2>Rs.60</h2>
          </div>
          <div className='flex justify-between font-semibold text-xl'>
            <h2>Tax</h2>
            <h2>Rs.20</h2>
          </div>
          <div className='border-b-2 border-dotted border-gray-500 p-2'></div>
          <div className='flex justify-between font-semibold text-xl pt-2'>
            <h2>Total Amount</h2>
            <h2>Rs.230</h2>
          </div>
        </div>

        {/* Button */}
        <div className='bg-green-500 rounded-md p-2 font-semibold text-white text-xl text-center mt-8 py-3'>
          <button className=''>Place Order</button>
        </div>
      </div>
    </div>
  );
}
