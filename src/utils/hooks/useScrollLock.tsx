import { useState, useEffect } from "react";

export default function useScrollLock() {
  const [isLocked, setIsLocked] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    // if (typeof document !== "undefined") {
    const bodyStyle = document.body.style;
    bodyStyle.overflowY = isLocked ? "hidden" : "auto";
    // }
  }, [isLocked]);

  const toggleScrollLock = () => {
    setIsLocked((prevState) => !prevState);
  };

  return [toggleScrollLock];
}
