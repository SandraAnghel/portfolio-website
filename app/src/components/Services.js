import React from 'react';

export default function Services() {
    return (
        <section className="py-16 lg:py-24 shadow-inner  bg-yellow-100">
    <div className="lg:flex justify-center gap-x-18">
      <div className="mx-4 md:w-2/3 md:mx-auto mb-16 lg:mx-0 lg:mb-0 lg:w-80 flex flex-col items-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.82092 17.9378V22.1791H6.06221L18.5712 9.65881L14.3299 5.41753L1.82092 17.9378ZM24 19.1932L19.1932 24L13.312 18.1188L15.3139 16.1169L16.4449 17.2479L19.2385 14.443L20.8445 16.049L19.1932 17.655L20.3921 18.786L21.9981 17.2026L24 19.1932V19.1932ZM5.90386 10.6767L0 4.80679L4.80679 0L6.79736 2.00188L4.00377 4.80679L5.21395 6.00565L7.99623 3.20075L9.60226 4.80679L7.99623 6.40151L9.12724 7.53252L5.90386 10.6767V10.6767ZM21.8511 6.34496C22.2922 5.90386 22.2922 5.21395 21.8511 4.75024L19.2045 2.14892C18.7861 1.70782 18.0509 1.70782 17.6098 2.14892L15.5287 4.21866L19.77 8.45994L21.8511 6.34496Z"
            fill="#78350F" />
        </svg>
        <h2 className="text-xl lg:text-2xl mt-3 mb-6 font-semibold text-gray-900">Website Design</h2>
        <p className="text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus,
          augue ut leo
          sagittis
          tempor nibh. Commodo
          nulla nullam
          tempor adipiscing.</p>
      </div>

      <div className="mx-4 md:w-2/3 md:mx-auto mb-16 lg:mx-0 lg:mb-0 lg:w-80 flex flex-col items-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.9976 0L24 7.01647L21.9812 9.00706L14.9929 2.01882L16.9976 0V0ZM0 22.9835L9.17647 13.8494C9.03529 13.4118 9.13412 12.8612 9.50118 12.4941C10.0518 11.9435 10.9553 11.9435 11.5059 12.4941C12.0565 13.0588 12.0565 13.9482 11.5059 14.4988C11.1388 14.8659 10.5882 14.9647 10.1506 14.8235L1.01647 24L15.9953 18.9882L20.9788 10.0094L14.0047 3.02118L5.01177 8.00471L0 22.9835Z"
            fill="#78350F" />
        </svg>

        <h2 className="text-xl lg:text-2xl mt-3 mb-6 font-semibold text-gray-900">SEO</h2>
        <p className="text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus,
          augue ut leo
          sagittis
          tempor nibh. Commodo
          nulla nullam
          tempor adipiscing.</p>
      </div>

      <div className="mx-4 md:w-2/3 md:mx-auto mb-16 lg:mx-0 lg:mb-0 lg:w-80 flex flex-col items-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.6 12C14.268 12 13.2 13.068 13.2 14.4C13.2 15.0365 13.4529 15.647 13.9029 16.0971C14.353 16.5471 14.9635 16.8 15.6 16.8C16.2365 16.8 16.847 16.5471 17.2971 16.0971C17.7471 15.647 18 15.0365 18 14.4C18 13.7635 17.7471 13.153 17.2971 12.7029C16.847 12.2529 16.2365 12 15.6 12ZM12 21.6C9.45392 21.6 7.01212 20.5886 5.21177 18.7882C3.41143 16.9879 2.4 14.5461 2.4 12C2.4 9.45392 3.41143 7.01212 5.21177 5.21177C7.01212 3.41143 9.45392 2.4 12 2.4C14.5461 2.4 16.9879 3.41143 18.7882 5.21177C20.5886 7.01212 21.6 9.45392 21.6 12C21.6 14.5461 20.5886 16.9879 18.7882 18.7882C16.9879 20.5886 14.5461 21.6 12 21.6ZM12 0C10.4241 0 8.86371 0.310389 7.4078 0.913446C5.95189 1.5165 4.62902 2.40042 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C4.62902 21.5996 5.95189 22.4835 7.4078 23.0866C8.86371 23.6896 10.4241 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 10.4241 23.6896 8.86371 23.0866 7.4078C22.4835 5.95189 21.5996 4.62902 20.4853 3.51472C19.371 2.40042 18.0481 1.5165 16.5922 0.913446C15.1363 0.310389 13.5759 0 12 0ZM14.4 8.4C14.4 7.76348 14.1471 7.15303 13.6971 6.70294C13.247 6.25286 12.6365 6 12 6C10.668 6 9.6 7.068 9.6 8.4C9.6 9.03652 9.85286 9.64697 10.3029 10.0971C10.753 10.5471 11.3635 10.8 12 10.8C12.6365 10.8 13.247 10.5471 13.6971 10.0971C14.1471 9.64697 14.4 9.03652 14.4 8.4ZM8.4 12C7.76348 12 7.15303 12.2529 6.70294 12.7029C6.25286 13.153 6 13.7635 6 14.4C6 15.0365 6.25286 15.647 6.70294 16.0971C7.15303 16.5471 7.76348 16.8 8.4 16.8C9.03652 16.8 9.64697 16.5471 10.0971 16.0971C10.5471 15.647 10.8 15.0365 10.8 14.4C10.8 13.7635 10.5471 13.153 10.0971 12.7029C9.64697 12.2529 9.03652 12 8.4 12Z"
            fill="#78350F" />
        </svg>

        <h2 className="text-xl lg:text-2xl mt-3 mb-6 font-semibold text-gray-900">Social Media</h2>
        <p className="text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus,
          augue ut leo
          sagittis
          tempor nibh. Commodo
          nulla nullam
          tempor adipiscing.</p>
      </div>
    </div>
  </section>
    );
}