import NavMobile from "@/components/layout/NavMobile";
import NavDesktop from "@/components/layout/NavDesktop";
import SwitchDarkMode from "@/components/UI/SwitchDarkMode";
import Authetication from "@/components/UI/Authetication/page.";

export default function Nav() {
  return (
    <nav className="my-6 flex justify-between sm:my-4">
      <NavMobile />
      <NavDesktop />
      <div className="flex gap-3">
        <SwitchDarkMode />
        <Authetication />
      </div>
    </nav>
  );
}
