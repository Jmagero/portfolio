import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <section id="about">
    <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-black text-grey">
          Hello, There.
          <br />
          I&apos;m Jocyline.
        </h1>
        <p className="mb-10 leading-relaxed text-justify font-serif">
          <span className="font-bold">I&apos;m a full-stack software developer!</span>
          <br />
          I can help you build a product ,feature or website
          <br />
          Look through some of my work and experience!
          <br />
          If you like what you see and have a project you need coded,
          <br />
          don&apos;t hestiate to contact me.
        </p>
        <div className="flex justify-center">
          <Link
            to="/contact"
            className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            Work With Me
          </Link>
          <Link
            to="/"
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
          >
            See My Past Work
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-80 md:w-1/2 w-5/6 rounded-md border-gray-300">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="./myself.jpg"
        />
      </div>
    </div>
  </section>
);

export default About;
