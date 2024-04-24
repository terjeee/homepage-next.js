"use client";

import { useState, useEffect, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

import { regexEmail } from "@/utils/regex";
import SVGLoading from "@/components/svg/misc/SVGLoading";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailValid, setEmailValid] = useState<boolean | undefined>(undefined);
  const [messageValid, setMessageValid] = useState<boolean | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const EMAILJS_KEY: undefined | string = process.env.EMAILJS_KEY;
  const formData = useRef<HTMLFormElement>(null);
  const formIsValid = email.length > 0 && regexEmail.test(email) && message.length >= 5 && message.length < 250;

  useEffect(() => {
    setEmailValid(true);

    const timeoutEmail = setTimeout(() => {
      if (email.length > 0 && !regexEmail.test(email)) return setEmailValid(false);
    }, 1000);
    return () => clearTimeout(timeoutEmail); // return (useEffect) = clean-up før main code
  }, [email]);

  useEffect(() => {
    setMessageValid(true);

    const timeoutMessage = setTimeout(() => {
      if (message.length !== 0 && (message.length < 5 || message.length > 100)) return setMessageValid(false);
    }, 1000);
    return () => clearTimeout(timeoutMessage); // return (+useEffect) = clean-up før main code
  }, [message]);

  async function handleSendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (formData.current) {
      setIsSubmitting(true);
      const response = await emailjs.sendForm("service_contactForm", "template_70fzocf", formData.current, EMAILJS_KEY);

      if (response.text === "OK") {
        // TODO: hotToast success
        return;
      } else {
        return;
        // TODO: hotToast error
      }

      setIsSubmitting(false);

      setName("");
      setEmail("");
      setMessage("");
    }
  }

  return (
    <div className="my-20 flex flex-col items-center justify-center sm:my-32">
      <form className="sm:w-/12 flex w-4/6 flex-col gap-3" onSubmit={handleSendEmail} ref={formData}>
        <input
          id="formName"
          name="formName"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="name"
          spellCheck={false}
          className="placeholder-grey dark:placeholder-grey rounded-md border border-darkGrey px-2 py-3 font-quicksand text-sm font-medium text-black focus:rounded-md focus:border-black dark:bg-darkBg dark:text-white dark:focus:border-white"
        />
        <>
          <input
            id="formEmail"
            name="formEmail"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="email"
            spellCheck={false}
            className="placeholder-grey dark:placeholder-grey w-full rounded-md border border-darkGrey px-2 py-3 font-quicksand text-sm font-medium text-black focus:rounded-md focus:border-black dark:bg-darkBg dark:text-white dark:focus:border-white"
          />
          {emailValid === false && (
            <p className="mb-1 text-[13px] font-bold text-red dark:font-semibold">Please enter a valid email</p>
          )}
        </>
        <>
          <textarea
            id="formMsg"
            name="formMsg"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            // placeholder="message"
            spellCheck={false}
            className={`dark:placeholder-grey placeholder-grey block h-36 w-full resize-none rounded-md border border-darkGrey px-2 py-3 font-quicksand text-sm font-medium text-black focus:rounded-md focus:border-black dark:bg-darkBg dark:text-white dark:focus:border-white`}
          />
          {messageValid === false && (
            <p className="mb-1 pt-1 text-[13px] font-bold text-red dark:font-semibold">
              Message needs to be 5-250 characters
            </p>
          )}
        </>
        <button
          className="sm:text-md align-center flex w-full cursor-pointer justify-center rounded-md border border-link bg-link px-2 py-2 font-quicksand text-sm font-semibold tracking-wide text-white focus:rounded-md disabled:cursor-not-allowed disabled:border-darkGrey disabled:bg-darkGrey"
          disabled={!formIsValid}
        >
          {isSubmitting ? <SVGLoading className="h-6" /> : "SEND MESSAGE"}
        </button>
        {/* TODO: reCAPTCHA */}
      </form>
    </div>
  );
}