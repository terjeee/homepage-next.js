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
    }, 750);
    return () => clearTimeout(timeoutEmail); // return (i useEffect) = clean-up før main code
  }, [email]);

  useEffect(() => {
    setMessageValid(true);
    const timeoutMessage = setTimeout(() => {
      if (message.length !== 0 && (message.length < 5 || message.length > 100)) return setMessageValid(false);
    }, 750);
    return () => clearTimeout(timeoutMessage); // return (i +useEffect) = clean-up før main code
  }, [message]);

  function sendEmail(event: FormEvent<HTMLFormElement>) {
    if (formData.current) {
      event.preventDefault();
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
    <div className="h-full flex justify-center items-center">
      <h1 className="font-bold" style={{ writingMode: "vertical-rl", textOrientation: "upright" }}>
        CONTACT
      </h1>
      <form className="" onSubmit={sendEmail} ref={formData}>
        <div className="">
          <input
            autoFocus
            type="email"
            placeholder="Email"
            name="formEmail"
            id="formEmail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className=""
          />
          {!emailValid && <p className="">Please enter a valid email.</p>}
        </div>
        <div className="">
          <textarea
            className=""
            name="formMsg"
            placeholder="Message"
            id="formMsg"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          {!messageValid && <p className="">Message needs to be 5-250 characters.</p>}
        </div>
        <button className="" disabled={!formValid}>
          SEND
        </button>
      </form>
    </div>
  );
}
