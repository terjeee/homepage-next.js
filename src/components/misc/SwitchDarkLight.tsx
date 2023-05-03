import { useState } from "react";

import IconMoon from "@/components/svg/misc/IconMoon";
import IconSun from "@/components/svg/misc/IconSun";

export default function SwitchDarkLight() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevState) => !prevState);
  }

  return <button onClick={toggleDarkMode}>{darkMode ? <IconMoon width="22" /> : <IconSun width="22" />}</button>;
}
