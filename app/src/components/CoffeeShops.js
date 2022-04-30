import React from 'react';

export default function CoffeeShops() {
    return (
        <>
        <div className="lg:flex justify-center items-center h-full pb-16 lg:pb-0">
          <img className="pt-24 w-full lg:pt-0 lg:w-auto" src="/coffee_hero.png" alt="" />
          <div className="mx-4 mt-8 lg:mt-0 lg:ml-16">
            <span className="block uppercase text-sm lg:text-base lg:font-semibold mb-2 lg:mb-4 text-gray-700">I help coffee
              shops to</span>
            <h1 className="text-5xl lg:text-7xl uppercase text-gray-900 font-medium mb-4 lg:mb-8">Get more <span
              className="block font-black">coffee
              lovers</span>
              in the door</h1>
            <a className="inline-block uppercase text-sm text-center font-bold px-5 py-3 lg:px-10 lg:py-4 rounded-tr-3xl rounded-bl-3xl bg-gray-900 text-yellow-50 hover:bg-gray-700 focus:ring-2 focus:ring-yellow-300"
              href="/contact.html">Find out more</a>
          </div>
        </div>
        </>
    );
}