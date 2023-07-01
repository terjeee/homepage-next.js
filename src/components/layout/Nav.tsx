import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import SwitchDarkMode from "../UI/SwitchDarkMode";
import SignIn from "../UI/SignIn";

export default function Nav() {
  return (
    <nav className="my-4 flex justify-between">
      <NavMobile />
      <NavDesktop />
      <div className="flex gap-2">
        <SwitchDarkMode />
        <SignIn />
      </div>
    </nav>
  );
}
