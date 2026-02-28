"use client";
import { useEffect, useState } from "react";
import { Forminit } from "forminit";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  const forminit = new Forminit({ proxyUrl: "/api/forminit" });

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2500);
    }
  }, [copied]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const { error: formError } = await forminit.submit("r5gh194bms1", formData);

    if (formError) {
      setStatus("error");
      setError(formError.message);
      return;
    }

    setStatus("success");
    form.reset();
  }

  return (
    <section
      id="contact"
      className="w-full h-full min-h-screen bg-[#453C67] flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[53.125rem] w-full h-auto">
        <div className="max-w-[53.125rem] mx-auto p-4 flex flex-col justify-center w-full h-auto">
          <div className="-left-[10rem] w-[100vh] absolute items-center -rotate-90 text-white opacity-60 xl:flex hidden flex-col">
            <p className="font-bold  text-[10rem]">Contact</p>
          </div>
          <div className="pb-8 xl:pt-[10rem] lg:pt-[6rem]">
            <p className="text-gray-300 py-4 component-caption relative">
              || Submit the form below or write me an email -
              <button
                onClick={() => {
                  navigator.clipboard.writeText("abhinaykatta97@gmail.com");
                  setCopied(true);
                }}
                className="cursor-pointer select-all hover:bg-[#112100]
                transition-colors duration-100 w-min px-1 hover:selection:bg-black py-1 rounded-md selection:bg-none">
                abhinaykatta97@gmail.com
              </button>
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

          {status === "error" && (
            <p className="text-red-400 mt-4 text-center">{error}</p>
          )}
          {status === "success" && (
            <p className="text-green-300 mt-4 text-center">
              Message sent successfully!
            </p>
          )}
          {status !== "error" && status !== "success" && (
            <div className="flex flex-col">
              <div className="flex gap-4">
                <input
                  className="w-1/2 bg-[#ccd6f6] p-2 rounded-md text-black placeholder:text-black"
                  type="text"
                  placeholder="First Name *"
                  required
                  name="fi-sender-firstName"></input>
                <input
                  className="w-1/2 bg-[#ccd6f6] p-2 rounded-md text-black placeholder:text-black"
                  type="text"
                  placeholder="Last Name *"
                  required
                  name="fi-sender-lastName"></input>
              </div>
              <input
                className="my-4 p-2 bg-[#ccd6f6] rounded-md text-black placeholder:text-black"
                type="email"
                name="fi-sender-email"
                placeholder="Email *"
                required></input>
              <textarea
                className=" bg-[#ccd6f6] p-2 rounded-md text-black placeholder:text-black"
                name="fi-text-message"
                rows={8}
                required
                placeholder="Message *"></textarea>

              <button
                type="submit"
                disabled={status === "loading"}
                className={`text-white hover:text-[#453C67] border-2 hover:bg-[#bca9ff] rounded-md
                 hover:border-[#bca9ff] px-4 py-3 mt-8 mx-auto flex items-center cursor-pointer
                  ${
                    status === "loading"
                      ? "opacity-50 cursor-not-allowed"
                      : "opacity-100"
                  }`}>
                {status === "loading" ? "Sending..." : "Send"}
              </button>
            </div>
          )}
        </div>
      </form>
    </section>
  );
};

export default Contact;
