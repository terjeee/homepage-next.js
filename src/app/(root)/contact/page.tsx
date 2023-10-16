"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

import { regexEmail } from "@/utils/regex";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailValid, setEmailValid] = useState<boolean | undefined>(undefined);
  const [messageValid, setMessageValid] = useState<boolean | undefined>(undefined);
  const formData = useRef<HTMLFormElement>(null);
  const formValid = email.length > 0 && regexEmail.test(email) && message.length >= 5 && message.length < 250;

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
      emailjs.sendForm("service_contactForm", "template_70fzocf", formData.current, "6hbDSK_0uSjg0vdP5").then(
        () => {
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
    <div className="my-36 flex h-full items-center justify-center gap-6">
      <h1 className="hidden text-2xl font-bold tracking-widest sm:block" style={{ writingMode: "vertical-rl", textOrientation: "upright" }}>
        CONTACT
      </h1>
      <form className="flex min-w-[45%] flex-col gap-3" onSubmit={sendEmail} ref={formData}>
        <div className="group relative ">
          <input
            id="formEmail"
            type="email"
            name="formEmail"
            placeholder="EMAIL"
            spellCheck={false}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={`placeholder-grey dark:placeholder-grey w-full rounded-md border border-darkGrey px-2 py-3 font-silkscreen text-sm font-medium text-black focus:rounded-md focus:border-black dark:bg-darkSecondary dark:text-white dark:focus:border-white
            `}
          />
          {!emailValid && <p className="-mb-1 pt-1 text-[13px] font-bold text-red dark:font-semibold">Please enter a valid email.</p>}
        </div>
        <div>
          <textarea
            name="formMsg"
            id="formMsg"
            placeholder="Message.."
            spellCheck={false}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className={`dark:focus:border-whitedark:placeholder-grey placeholder-grey block h-28 w-full resize-none rounded-md border border-darkGrey px-2 py-3 font-silkscreen text-sm font-medium text-black focus:rounded-md focus:border-black dark:bg-darkSecondary dark:text-white dark:focus:border-white`}
          />
          {!messageValid && <p className="-mb-1 pt-1 text-[13px] font-bold text-red dark:font-semibold">Message needs to be 5-250 characters.</p>}
        </div>
        <button
          className="cursor-pointer rounded-md border border-link bg-link px-2 py-3 font-silkscreen text-sm font-bold text-white disabled:cursor-not-allowed disabled:border-darkGrey disabled:bg-darkGrey"
          disabled={!formValid}
        >
          SEND
        </button>
      </form>
    </div>
  );
}
