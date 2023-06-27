import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
      <form
        method="POST"
        action="https://getform.io/f/36ce7206-7251-4f1c-8850-6109a00ac661"
        className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#5a87a5] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            || Submit the form below or write me an email -
            abhinaykatta97@gmail.com
          </p>
        </div>
        <input
          className=" bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"></input>
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Email"
          name="email"></input>
        <textarea
          className=" bg-[#ccd6f6] p-2"
          name="message"
          rows={10}
          placeholder="Message"></textarea>
        <button className="text-white border-2 hover:bg-[#5a87a5] hover:border-[#5a87a5] px-4 py-3 my-8 mx-auto flex items-center">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
