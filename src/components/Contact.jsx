import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-[#453C67] flex justify-center items-center p-4">
      <form
        method="POST"
        action="https://getform.io/f/36ce7206-7251-4f1c-8850-6109a00ac661"
        className="flex flex-col max-w-[53.125rem] w-full h-screen">
        <div className="max-w-[53.125rem] mx-auto p-4 flex flex-col justify-center w-full h-screen">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#bca9ff] text-gray-300">
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
        </div>
      </form>
    </div>
  );
};

export default Contact;
