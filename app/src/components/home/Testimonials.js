import React from 'react';
import './Testimonials.css';

export default function Testimonials() {
    return (
<section className="flex flex-col shadow-inner rounded-r-10xl lg:rounded-r-full items-center pt-30 pb-40 bg-yellow-100">
    <h2 className="inline-block text-3xl lg:text-4xl font-semibold uppercase text-gray-900 mb-18">Client Testimonials</h2>

    <div className="lg:flex gap-x-10">

      <div className="mb-24 lg:mb-0">
        <div className="flex items-center shadow-md w-89 h-89 p-10 rounded-tl-3xl rounded-br-3xl bg-yellow-50">
          <p className="font-medium leading-relaxed">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
            rhoncus mauris nunc
            integer lectus risus. Molestie in a
            lacinia sapien, sodales purus. Ultrices semper ornare ante. Molestie in a lacinia sapien, sodales purus.
            Ultrices semper
            ornare ante a lacinia nunc.”</p>
        </div>
        <div className="flex mt-10">
          <div className="h-12 w-12 flex-shrink-0">
            <img className="w-full h-full rounded-full shadow-inner" src="/testimonials/smiling_man.png"
              alt="A smiling man."/>
          </div>
          <div className="ml-4">
            <span className="block text-sm font-bold mt-2 tracking-wider text-gray-600">Thom Yorke</span>
            <span className="block text-sm text-gray-500">Founder, Aroma</span>
          </div>
        </div>
      </div>

      <div className="mb-24 lg:mb-0">
        <div className="flex items-center shadow-md w-89 h-89 p-10 rounded-tl-3xl rounded-br-3xl bg-yellow-50">
          <p className="font-medium leading-relaxed">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
            rhoncus mauris nunc
            integer lectus risus. Molestie in a
            lacinia sapien, sodales purus. Ultrices semper ornare ante. Molestie in a lacinia sapien, sodales purus.
            Ultrices semper
            ornare ante a lacinia nunc.”</p>
        </div>
        <div className="flex mt-10">
          <div className="h-12 w-12 flex-shrink-0">
            <img className="w-full h-full rounded-full shadow-inner" src="/testimonials/smiling_woman.jpg"
              alt="A smiling woman."/>
          </div>
          <div className="ml-4">
            <span className="block text-sm font-bold mt-2 tracking-wider text-gray-600">Laura Misch</span>
            <span className="block text-sm text-gray-500">Barista, Truth Coffee</span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center shadow-md w-89 h-89 p-10 rounded-tl-3xl rounded-br-3xl bg-yellow-50">
          <p className="font-medium leading-relaxed">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
            rhoncus mauris nunc
            integer lectus risus. Molestie in a
            lacinia sapien, sodales purus. Ultrices semper ornare ante. Molestie in a lacinia sapien, sodales purus.
            Ultrices semper
            ornare ante a lacinia nunc.”</p>
        </div>
        <div className="flex mt-10">
          <div className="h-12 w-12 flex-shrink-0">
            <img className="w-full h-full rounded-full shadow-inner" src="/testimonials/smiling_man_2.jpg"
              alt="A smiling man."/>
          </div>
          <div className="ml-4">
            <span className="block text-sm font-bold mt-2 tracking-wider text-gray-600">Rory Ferreira</span>
            <span className="block text-sm text-gray-500">Owner, 17th Cafe</span>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
}