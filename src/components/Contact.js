import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-full  md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: 'opacity(0.7)' }}
            src="https://www.google.com/maps/embed/v1/place?q=12100+metric+blvd&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>
        <div className="bg-gray-900 relative flex flex-wrap py-6 px-10 rounded shadow-md">
          <div className="lg:w-full px-6">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              ADDRESS
            </h2>
            <p className="mt-1 text-white">
              Austin
              {' '}
              <br />
              Texas
            </p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              EMAIL
            </h2>
            <p className="text-white leading-relaxed">
              jmagero54@gmail.com
            </p>
            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
              PHONE
            </h2>
            <p className="text-white">+(737)2962902</p>
          </div>
        </div>
      </div>
    </section>
  );
}
