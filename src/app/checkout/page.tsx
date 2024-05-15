import React from "react";
import Address from "../components/Checkout/Address";
import Payment from "../components/Checkout/Payment";
import Delivery from "../components/Checkout/Delivery";
import OrderSummary from "../components/Checkout/OrderSummary";
import Image from "next/image";

type Props = {};

export default function ({}: Props) {
  return (
    <div>
      <div>
        <p className='text-center text-3xl font-bold'>Nav Bar</p>
      </div>
      {/* bg image */}
      <section className="h-[30vh] bg-cover w-screen bg-[url('/image/food.jpg')]">
        <div className='flex-col justify-center'>
          <h1 className='text-green-500 sm:text-4xl text-xl pt-4 pb-2 mb-2 sm:mb-10 font-bold ml-8 sm:ml-0 text-center'>
            Food so good, it&apos;s like a hug in your belly
          </h1>
          <h1 className='text-white sm:text-4xl text-xl pt-4 pb-2 mb-2 sm:mb-10 font-bold ml-8 sm:ml-0 text-center'>
            Order now, feel the love.
          </h1>
        </div>
      </section>
      <div>
        <h1 className='text-center p-5 font-bold text-3xl'>Checkout</h1>
      </div>
      <div className='flex justify-center'>
        <div className='flex-col justify-between'>
          <div>
            <Payment />
          </div>
          <div>
            <Delivery />
          </div>
        </div>
        <div className='flex-col'>
          <div>
            <Address />
          </div>
          <div>
            <OrderSummary />
          </div>
        </div>
      </div>
      <div>
        <p className='text-center text-3xl font-bold'>Footer</p>
      </div>
    </div>
  );
}
