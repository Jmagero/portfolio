import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <section id="about" className="bg-about">
    <div className="container mx-auto h-full px-20 py-10 flex justify-between  md:flex-row flex-col items-center">
      <div className="py-5">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-black text-grey">
          Hello, There.
          <br />
          I&apos;m Jocyline.
        </h1>
        <p className="mb-10 leading-relaxed text-justify font-serif">
          <span className="font-bold">I&apos;m a full-stack software developer!</span>
          <br />
          I can help you build a product,feature, or website.
          <br />
          Look through some of my work and experience!
          <br />
          If you like what you see and have a project you need coded,
          <br />
          don&apos;t hesitate to contact me.
        </p>
        <div className="flex flex-col">
          <Link
            to="/contact"
            className="inline-flex text-indigo-900 bg-blue-500 border-0 py-2 px-6 my-2 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            WORK WITH ME
          </Link>
          <Link
            to="/projects"
            className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
          >
            VIEW MY PROJECTS
          </Link>
          <a
            className="inline-flex text-indigo-900 bg-blue-500 border-0 py-2 px-6 my-2 focus:outline-none hover:bg-green-600 rounded text-lg"
            href="./resume.pdf"
            download
          >
            RESUME
          </a>
        </div>
      </div>
      <div className="w-80">
        <img
          className="object-contain md:object-scale-down rounded-full"
          alt="hero"
          src="./jocyline.png"
        />
      </div>
    </div>
    <div className="flex flex-col items-center">
      <h1 className="text-indigo-900 font-bold">LET&apos;S CONNECT</h1>
      <div className="flex justify-center">
        <a
          href="https://www.linkedin.com/in/jocyline-magero/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./linkedin.png" alt="github" />
        </a>
        <a
          href="https://twitter.com/magero_jocyline"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./twitter.png" alt="github" />
        </a>
        <a
          href="https://angel.co/u/jocyline-magero"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./angelist.png" alt="github" />
        </a>
        <a
          href="https://github.com/Jmagero"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./github.png" alt="github" />
        </a>
      </div>
    </div>
  </section>
);

export default About;
