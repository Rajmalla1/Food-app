import React from "react";
import Image from "next/image";
import Counter from "./Counter";
import { MdDeleteForever } from "react-icons/md";
import CustomButton from "../CustomButton";

type Props = {};

export default function Cart({}: Props) {
  return (
    <div>
      <div className='w-fit p-8 border-2 rounded-xl shadow-md m-5'>
        <div>
          <h1 className='text-3xl font-bold'>Cart</h1>
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
        <div>
          <button className='font-bold text-xl bg-green-500 p-3 rounded-lg w-full text-white hover:bg-green-600'>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
