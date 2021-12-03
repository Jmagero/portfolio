import React from 'react'
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Jocyline.
              </h1>
              <p className="mb-10 leading-relaxed text-justify font-serif">
                  Hello! I'm a full-stack developer who has graduated from Microverse,
                a remote software development school that uses pair programming 
                and real-world projects to teach development.
                <br/>
                While at Microverse I spent 1300+ hours mastering <span className="font-bold text-blue-900 text-opacity-100">algorithms, 
                data structures, and full-stack development </span> 
                while simultaneously 
                developing projects with <span className="font-bold text-blue-900 text-opacity-100"> Ruby, Rails, JavaScript, React, and Redux.</span>
                <br/>
                I have also developed skills in remote pair-programming using GitHub, 
                industry-standard git-flow,
                 and daily standups to communicate and collaborate with international
                  remote developers. 
                  <br/>
                  I worked at a call centre for several years before transitioning
                   into software development. The type of work was definitely different 
                   from web development, but I also learned several of the skills that 
                   I’m able to use nowadays as a developer, 
                  like <span className="font-bold text-blue-900 text-opacity-100">empathy, problem-solving, effective communication, multi-tasking, and more.</span>
              </p>
              <div className="flex justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Work With Me
                </Link>
                <Link
                  to="/projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
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
}

export default About;