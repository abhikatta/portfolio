import React, { useState } from "react";

const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div
      id="contact"
      className="w-full h-screen bg-[#453C67] flex justify-center items-center p-4">
      <form
        method="POST"
        action="https://getform.io/f/36ce7206-7251-4f1c-8850-6109a00ac661"
        className="flex flex-col max-w-[53.125rem] w-full h-screen">
        <div className="max-w-[53.125rem] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="font-bold inline border-b-4 border-[#bca9ff] text-gray-300 component-title">
              Contact
            </p>
            <p className="text-gray-300 py-4 component-caption">
              || Submit the form below or write me an email -
              abhinaykatta97@gmail.com
            </p>
          </div>
          <input
            className=" bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            onChange={(e) => setSenderName(e.target.value)}
            name="name"
            value={senderName}></input>
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}></input>
          <textarea
            className=" bg-[#ccd6f6] p-2"
            value={message}
            name="message"
            rows={8}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"></textarea>

          <button
            className={
              !message || !email || !senderName
                ? "scale-0"
                : "text-white scale-100 duration-200 hover:text-[#453C67] border-2 hover:bg-[#bca9ff] hover:border-[#bca9ff] px-4 py-3 my-8 mx-auto flex items-center"
            }>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
