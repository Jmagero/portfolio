/* eslint-disable react/prop-types */
import React from 'react';

const ContactForm = ({
  onSubmit, handleChange, toSend,
}) => (
  <section id="contact" className="bg-gray-900">
    <form
      className="w-80 mx-auto py-20"
      onSubmit={onSubmit}
      target="_blank"
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          name="from_name"
          placeholder="your name"
          value={toSend.from_name}
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="text"
          name="reply_to"
          placeholder="email"
          value={toSend.reply_to}
          onChange={handleChange}
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
          aria-label="submit"
        >
          Get in Touch
        </button>
      </div>
    </form>
  </section>
);

export default ContactForm;
