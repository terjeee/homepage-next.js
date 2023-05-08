import { useState, useEffect, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

import { regexEmail } from "@/utils/regex";

export default function Contact() {
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
      emailjs.sendForm("service_contactForm", "template_70fzocf", formData.current, process.env.NEXT_PUBLIC_EMAILJS_KEY).then(
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
    <div className="my-40 flex h-full items-center justify-center gap-4">
      <h1 className="text-2xl font-bold tracking-widest" style={{ writingMode: "vertical-rl", textOrientation: "upright" }}>
        CONTACT
      </h1>
      <form className="flex min-w-[45%] flex-col gap-4" onSubmit={sendEmail} ref={formData}>
        <div className="group relative ">
          <input
            id="formEmail"
            type="email"
            name="formEmail"
            placeholder="Email"
            spellCheck={false}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={`w-full rounded border border-darkGrey px-2 py-3 font-silkscreen text-sm font-medium text-black placeholder-black dark:bg-darkSecondary dark:text-white dark:placeholder-white
            `}
          />
          {!emailValid && <p className="-mb-1 pt-1 text-xs font-semibold text-red">Please enter a valid email.</p>}
        </div>
        <div>
          <textarea
            name="formMsg"
            id="formMsg"
            placeholder="Message"
            spellCheck={false}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className={`block h-28 w-full rounded border border-darkGrey px-2 py-3 font-silkscreen text-sm font-medium text-black placeholder-black dark:bg-darkSecondary dark:text-white dark:placeholder-white`}
          />
          {!messageValid && <p className="-mb-1 pt-1 text-xs font-bold text-red">Message needs to be 5-250 characters.</p>}
        </div>
        <button
          className="cursor-pointer rounded border border-link bg-link px-2 py-3 font-silkscreen text-xs font-bold tracking-wider text-white disabled:cursor-not-allowed disabled:border-darkGrey disabled:bg-darkGrey"
          disabled={!formValid}
        >
          SEND
        </button>
      </form>
    </div>
  );
}
