"use client";

import { useState, FormEvent, useRef } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const btnSubmit = useRef<HTMLButtonElement>();
  const btnReset = useRef<HTMLButtonElement>(); 
  
  function resetContactForm() {
    setName("");
    setEmail("");
    setMessage("");
  }

  function submitContactForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (btnSubmit.current) btnSubmit.current.disabled = true;

    // formValues === true
    // TODO: POST form to email.js
    // TODO: reset form values
    // resetContactForm();
    // TODO: enable buttons med useRef()
    // TODO: loading på submitBTN
    // TODO: Toast.tsx - success melding

    // formValues === false
    // TODO: error - Toast.tsx (egen komponent m/customization: bottom-left | bottom-middle | bottom-right )
    
    if (btnSubmit.current) btnSubmit.current.disabled = false;
  }

  return (
    <div className="my-24 flex flex-col items-center justify-center sm:my-40 sm:flex-row">
      <form className="flex w-4/6 flex-col gap-3 sm:w-7/12" onSubmit={submitContactForm}>
        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="NAME"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="placeholder-grey dark:placeholder-grey rounded-md border border-darkGrey px-2 py-3 font-silkscreen text-sm font-medium text-black focus:rounded-md focus:border-black dark:bg-darkBg dark:text-white dark:focus:border-white sm:w-3/5"
          />
          <input
            type="email"
            placeholder="EMAIL"
            spellCheck={false}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="placeholder-grey dark:placeholder-grey rounded-md border border-darkGrey px-2 py-3 font-silkscreen text-sm font-medium text-black focus:rounded-md focus:border-black dark:bg-darkBg dark:text-white dark:focus:border-white sm:w-full"
          />
        </div>
        <textarea
          placeholder="Message.."
          spellCheck={false}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`dark:placeholder-grey placeholder-grey block h-36 w-full resize-none rounded-md border border-darkGrey px-2 py-3 font-silkscreen text-sm font-medium text-black focus:rounded-md focus:border-black dark:bg-darkBg dark:text-white dark:focus:border-white dark:focus:border-white`}
        />
        <div className="flex gap-3">
          <button ref={btnSubmit} className="text-md w-5/6 cursor-pointer rounded-md border border-link bg-link px-2 py-2 font-silkscreen font-bold text-white focus:rounded-md dark:focus:border-white sm:py-2">
            SEND
          </button>
          <button
            ref={btnReset}
            onClick={resetContactForm}
            className="text-md w-1/6 cursor-pointer rounded-md border border-darkGrey px-2 py-2 font-silkscreen font-bold text-white focus:rounded-md focus:border-white sm:py-2"
          >
            👻
          </button>
        </div>
        {/* TODO: reCAPTCHA */}
      </form>
    </div>
  );
}
