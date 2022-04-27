import React from 'react';
import { CodeIcon } from '@heroicons/react/solid';
import projects from '../Data/projects';
// import img from '../dist/images/railscapstone1.png'

const Projects = () => (
  <section id="projects" className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
      <div className="flex flex-col w-full mb-20">
        <CodeIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          Apps I&apos;ve Built
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Below you can see some projects I&apos;ve been working on lately.
        </p>
      </div>
      <div className="">
        {projects.map((project) => (
          <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 bg-white border rounded-lg overflow-hidden m-6 shadow-2xl" key={project.title}>
            <div className="col-span-1">
              <img
                alt="gallery"
                className="object-fit h-100 w-100"
                src={project.image}
              />
            </div>
            <div className="col-span-2 p-6 border-gray-800 bg-gray-900">
              <h1 className="title-font text-lg font-medium text-white mb-3">
                {project.title}
              </h1>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{project.stack1}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{project.stack2}</span>
              </div>
              <p className="leading-relaxed">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-full mx-2"
              >
                See live
              </a>
              <a
                href={project.source}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-full"
              >
                See Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
