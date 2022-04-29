import React from 'react';

export default function PreviousWork() {
    return (
        <section className="pt-24 lg:pt-40 pb-32 lg:pb-52">
            <h2 className="text-center text-3xl lg:text-4xl font-semibold uppercase text-gray-900 mb-20 lg:mb-24">My Previous Work
            </h2>
            <div className="flex flex-col items-center mx-4 md:w-2/3 md:mx-auto lg:w-full lg:mx-0">
                <div className="lg:flex items-center justify-center gap-x-14">
                    <div className="lg:w-1/4">
                        <h2 className="inline-block text-xl font-semibold uppercase text-gray-800">Aroma Roastery</h2>
                        <p className="leading-relaxed my-6 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Massa in arcu venenatis est laoreet habitant nibh. Eu proin
                            egestas consequat pharetra sit volutpat consectetur mauris. Scelerisque ac lectus vitae, amet sed vel
                            molestie dui.
                            Ullamcorper.</p>
                        <a className="inline-block uppercase text-center text-sm font-bold px-5 py-3 lg:px-10 lg:py-4 rounded-tr-3xl rounded-bl-3xl bg-gray-900 text-yellow-50 hover:bg-gray-700 focus:ring-2 focus:ring-yellow-300"
                            href="/project-url.html">View Project</a>
                    </div>
                    <div
                        className="relative h-80 lg:w-80 mt-8 lg:mt-0 -mx-4 lg:mx-0 lg:rounded-tl-10xl lg:rounded-br-10xl overflow-hidden">
                        <div className="absolute top-0 right-0 left-0 bottom-0 opacity-30 bg-yellow-50">
                        </div>
                        <img className="h-full w-full object-cover" src="./previousWork/work_1.jpg" alt="Two cups of coffee on a wooden table." />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center my-24 lg:my-40 mx-4 md:w-2/3 md:mx-auto lg:w-full lg:mx-0">
                <div className="lg:flex flex-row-reverse items-center justify-center gap-x-14">
                    <div className="lg:w-1/4">
                        <h2 className="inline-block text-xl font-semibold uppercase text-gray-800">Truth Coffee</h2>
                        <p className="leading-relaxed my-6 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Massa in arcu venenatis est laoreet habitant nibh. Eu proin
                            egestas consequat pharetra sit volutpat consectetur mauris. Scelerisque ac lectus vitae, amet sed vel
                            molestie dui.
                            Ullamcorper.</p>
                        <a className="inline-block uppercase text-center text-sm font-bold px-5 py-3 lg:px-10 lg:py-4 rounded-tl-3xl rounded-br-3xl bg-gray-900 text-yellow-50 hover:bg-gray-700 focus:ring-2 focus:ring-yellow-300"
                            href="/project-url.html">View Project</a>
                    </div>
                    <div
                        className="relative h-80 lg:w-80 mt-8 lg:mt-0 -mx-4 lg:mx-0 lg:rounded-tr-10xl lg:rounded-bl-10xl overflow-hidden">
                        <div className="absolute top-0 right-0 left-0 bottom-0 opacity-30 bg-yellow-50">
                        </div>
                        <img className="h-full w-full object-cover" src="./previousWork/work_2.jpg"
                            alt="A barista preparing coffee in Truth Coffee" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mx-4 md:w-2/3 md:mx-auto lg:w-full lg:mx-0">
                <div className="lg:flex items-center justify-center gap-x-14">
                    <div className="lg:w-1/4">
                        <h2 className="inline-block text-xl font-semibold uppercase text-gray-800">17th Cafe</h2>
                        <p className="leading-relaxed my-6 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Massa in arcu venenatis est laoreet habitant nibh. Eu proin
                            egestas consequat pharetra sit volutpat consectetur mauris. Scelerisque ac lectus vitae, amet sed vel
                            molestie dui.
                            Ullamcorper.</p>
                        <a className="inline-block uppercase text-center text-sm font-bold px-5 py-3 lg:px-10 lg:py-4 rounded-tr-3xl rounded-bl-3xl bg-gray-900 text-yellow-50 hover:bg-gray-700 focus:ring-2 focus:ring-yellow-300"
                            href="/project-url.html">View Project</a>
                    </div>
                    <div
                        className="relative h-80 lg:w-80 mt-8 lg:mt-0 -mx-4 lg:mx-0 lg:rounded-tl-10xl lg:rounded-br-10xl overflow-hidden">
                        <div className="absolute top-0 right-0 left-0 bottom-0 opacity-30 bg-yellow-50">
                        </div>
                        <img className="h-full w-full object-cover" src="./previousWork/work_3.jpg"
                            alt="A coffee shop with people seated at tables." />
                    </div>
                </div>
            </div>
        </section>
    );
}