import Link from "next/link";

export default function SignIn() {
  return (
    <Link
      href="/signin"
      className=" my-auto cursor-pointer rounded-full bg-orange px-3 py-2 text-xs font-medium tracking-widest text-white transition duration-200 hover:rounded-full hover:bg-white hover:text-black focus:rounded-full dark:hover:bg-darkBg dark:hover:text-white sm:px-4"
    >
      SIGN IN
    </Link>
  );
}
