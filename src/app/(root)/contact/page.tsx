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

      const response = await emailjs.sendForm(
        "service_contactForm",
        "template_70fzocf",
        formData.current,
        "6hbDSK_0uSjg0vdP5"
      );

      if (response.text === "OK") {
        // TODO: hotToast success
        console.log("xd");
      } else {
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
      <form onSubmit={handleSendEmail} ref={formData} className="flex w-5/6 flex-col gap-3 sm:w-7/12">
        <input
          id="formName"
          name="formName"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="name"
          spellCheck={false}
          className="placeholder-grey dark:placeholder-grey rounded-lg border border-darkGrey px-2 py-3 font-quicksand text-sm font-medium text-black focus:rounded-lg focus:border-link dark:bg-darkBg dark:text-white dark:focus:border-link"
        />
        <input
          id="formEmail"
          name="formEmail"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email"
          spellCheck={false}
          className="w-full rounded-lg border border-darkGrey px-2 py-3 font-quicksand text-sm font-medium text-black focus:rounded-lg focus:border-link dark:bg-darkBg dark:text-white dark:focus:border-link"
        />
        <textarea
          id="formMsg"
          name="formMsg"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder=""
          spellCheck={false}
          className={`h-28 w-full resize-none rounded-lg border border-darkGrey px-2 py-3 font-quicksand text-sm text-black focus:rounded-lg focus:border-link dark:bg-darkBg dark:text-white dark:focus:border-link`}
        />
        {(emailValid === false || messageValid === false) && (
          <ul className="flex list-inside list-disc flex-col gap-1 py-1 ">
            {emailValid === false && <li className="text-[13px] font-semibold text-red">Please enter a valid email</li>}
            {messageValid === false && (
              <li className="text-[13px] font-semibold text-red">Message needs to be 5-250 characters</li>
            )}
          </ul>
        )}
        <button
          className="flex w-full cursor-pointer justify-center rounded-lg border border-link bg-link px-2 py-2.5 md:py-2 font-quicksand text-sm font-semibold tracking-wide text-white focus:rounded-lg focus:border-black disabled:cursor-not-allowed disabled:border-darkGrey disabled:bg-darkGrey dark:focus:border-white"
          disabled={!formIsValid}
        >
          {isSubmitting ? <SVGLoading className="h-6" /> : "SEND MESSAGE"}
        </button>
        {/* TODO: reCAPTCHA */}
      </form>
    </div>
  );
}
