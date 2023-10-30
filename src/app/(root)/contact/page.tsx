"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="my-24 flex flex-col items-center justify-center sm:my-40 sm:flex-row">
      <form className="flex w-4/6 flex-col gap-3 sm:w-7/12" onSubmit={() => {}}>
        <div className="flex flex-col gap-3 sm:flex-row">
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
          className={`dark:focus:border-whitedark:placeholder-grey placeholder-grey block h-36 w-full resize-none rounded-md border border-darkGrey px-2 py-3 font-silkscreen text-sm font-medium text-black focus:rounded-md focus:border-black dark:bg-darkBg dark:text-white dark:focus:border-white`}
        />
        <button className="text-md cursor-pointer rounded-md border border-link bg-link px-2 py-2 font-silkscreen font-bold text-white sm:py-3">
          SEND
        </button>
        {/* TODO: reCAPTCHA */}
      </form>
    </div>
  );
}
