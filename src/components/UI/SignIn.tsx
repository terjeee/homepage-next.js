import Link from "next/link";

export default function SignIn() {
  return (
    <Link
      href="/api/auth/signin"
      className=" my-auto cursor-pointer rounded-full bg-orange px-4 py-2 text-xs font-medium tracking-widest text-white transition duration-200 hover:scale-105 hover:bg-white hover:text-black dark:hover:bg-darkBg dark:hover:text-white"
    >
      SIGN IN
    </Link>
  );
}
// TODO: legg til svart outline på hover
// TODO: eventuelt border før/etter hover: