import NavMobile from "@/components/layout/NavMobile";
import NavDesktop from "@/components/layout/NavDesktop";
import SwitchDarkMode from "@/components/UI/SwitchDarkMode";
import Authetication from "@/components/UI/Authetication/page.";

export default function Nav() {
  return (
    <nav className="my-4 flex justify-between">
      <NavMobile />
      <NavDesktop />
      <div className="flex gap-2">
        <SwitchDarkMode />
        <Authetication />
      </div>
    </nav>
  );
}
