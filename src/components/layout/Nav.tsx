import NavMobile from "@/components/layout/NavMobile";
import NavDesktop from "@/components/layout/NavDesktop";
import SwitchDarkMode from "@/components/UI/SwitchDarkMode";
import SignIn from "@/components/UI/SignIn";

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
