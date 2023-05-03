import { useState, useEffect, useRef, FormEvent } from "react";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";

import { regexEmail } from "@/utils/regex";
import { env } from "process";

export default function Contact() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailValid, setEmailValid] = useState<boolean | undefined>(undefined);
  const [messageValid, setMessageValid] = useState<boolean | undefined>(undefined);
  const formData = useRef<HTMLFormElement>(null);
  const formValid = email.length > 0 && regexEmail.test(email) && message.length > 5 && message.length < 250;

  useEffect(() => {
    setEmailValid(true);
    const timeoutEmail = setTimeout(() => {
      if (email.length > 0 && !regexEmail.test(email)) return setEmailValid(false);
    }, 1000);
    return () => clearTimeout(timeoutEmail); // return (i useEffect) = clean-up før main code
  }, [email]);

  useEffect(() => {
    setMessageValid(true);
    const timeoutMessage = setTimeout(() => {
      if (message.length !== 0 && (message.length < 5 || message.length > 100)) return setMessageValid(false);
    }, 1000);
    return () => clearTimeout(timeoutMessage); // return (i +useEffect) = clean-up før main code
  }, [message]);

  function sendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formData.current) {
      emailjs
        .sendForm("service_contactForm", "template_70fzocf", formData.current, process.env.NEXT_PUBLIC_EMAILJS_KEY)
        .then(
          (result) => {
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  return (
    <div className="mx-4 h-full flex justify-center items-center gap-4">
      {/* <h1 className="font-bold text-xl" style={{ writingMode: "vertical-rl", textOrientation: "upright" }}>
        CONTACT
      </h1> */}
      <form className="min-w-[45%] flex flex-col gap-3" onSubmit={sendEmail} ref={formData}>
        <div className="relative group">
          <input
            id="formEmail"
            type="email"
            name="formEmail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={`w-full p-2 text-[12px] border border-darkGrey text-black rounded
              ${emailValid ? "focus:outline-link" : "focus:outline-red"} ${emailValid ? "" : "border-2 border-red"}
            `}
          />
          <label className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 font-silkscreen text-black text-[10px] group-focus-within:text-[10px] peer-valid:text-[10px] group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
            Email
          </label>
          {!emailValid && <p className="px-1 text-red text-[10px] font-semibold">Please enter a valid email.</p>}
        </div>
        <div>
          <textarea
            name="formMsg"
            id="formMsg"
            placeholder="Message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className={`block p-2 w-full h-24 font-silkscreen text-[10px] text-black placeholder-black border border-darkGrey rounded ${
              messageValid ? "focus:outline-link" : "focus:outline-red"
            } ${messageValid ? "" : "border-2 border-red"}`}
          />
          {!messageValid && <p className="px-1 text-red text-[10px] font-semibold">Message needs to be 5-250 characters.</p>}
        </div>
        <button
          className="py-3 px-2 text-xs text-white font-silkscreen tracking-wider  bg-link border border-link rounded cursor-pointer disabled:bg-darkGrey disabled:border-darkGrey disabled:cursor-not-allowed"
          disabled={!formValid}
        >
          SEND
        </button>
      </form>
    </div>
  );
}
