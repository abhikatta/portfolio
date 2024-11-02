"use client";
import { useEffect, useMemo, useState } from "react";
const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2500);
    }
  }, [copied]);
  const isSubmitDisabled = useMemo(() => {
    return (
      !message ||
      !email ||
      !senderName ||
      message.trim() === "" ||
      email.trim() === "" ||
      senderName.trim() === ""
    );
  }, [message, email, senderName]);
  return (
    <div
      id="contact"
      className="w-full h-full min-h-screen bg-[#453C67] flex justify-center items-center">
      <form
        method="POST"
        action="https://getform.io/f/36ce7206-7251-4f1c-8850-6109a00ac661"
        className="flex flex-col max-w-[53.125rem] w-full h-auto">
        <div className="max-w-[53.125rem] mx-auto p-4 flex flex-col justify-center w-full h-auto">
          <div className="-left-[10rem] w-[100vh] absolute items-center -rotate-90 text-white opacity-60 xl:flex hidden flex-col">
            <p className="font-bold  text-[10rem]">Contact</p>
          </div>
          <div className="pb-8 xl:pt-[10rem] lg:pt-[6rem]">
            <p className="text-gray-300 py-4 component-caption relative">
              || Submit the form below or write me an email -
              <span
                onClick={() => {
                  navigator.clipboard.writeText("abhinaykatta97@gmail.com");
                  setCopied(true);
                }}
                className="cursor-pointer select-all hover:bg-[#112100]
                transition-colors duration-100 w-min px-1 hover:selection:bg-black py-1 rounded-md selection:bg-none">
                abhinaykatta97@gmail.com
              </span>
              {copied ? (
                <span
                  className=" ml-[40%] -mt-[3.5%] rounded-es-md rounded-ee-md rounded-se-md
                 bg-slate-200 text-black w-min text-sm px-2 py-1 absolute left-[50%] top-20">
                  Copied!
                </span>
              ) : (
                ""
              )}
            </p>
          </div>
          <input
            className=" bg-[#ccd6f6] p-2 rounded-md"
            type="text"
            placeholder="Name *"
            onChange={(e) => setSenderName(e.target.value)}
            name="name"
            value={senderName}></input>
          <input
            className="my-4 p-2 bg-[#ccd6f6] rounded-md"
            type="text"
            name="email"
            placeholder="Email *"
            onChange={(e) => setEmail(e.target.value)}
            value={email}></input>
          <textarea
            className=" bg-[#ccd6f6] p-2 rounded-md"
            value={message}
            name="message"
            rows={8}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message *"></textarea>

          <button
            disabled={isSubmitDisabled}
            title={
              isSubmitDisabled
                ? "Please fill in all the fields marked with *."
                : ""
            }
            className={`text-white hover:text-[#453C67] border-2 hover:bg-[#bca9ff] rounded-md
                 hover:border-[#bca9ff] px-4 py-3 mt-8 mx-auto flex items-center cursor-pointer
                  ${
                    isSubmitDisabled
                      ? "opacity-30 cursor-not-allowed"
                      : "opacity-100"
                  }`}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
