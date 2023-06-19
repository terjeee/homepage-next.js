import { useState, useEffect } from "react";

export default function useScrollLock() {
  const [isLocked, setIsLocked] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    document.body.style.overflowY = isLocked ? "hidden" : "auto";
  }, [isLocked]);

  const toggleScrollLock = () => {
    setIsLocked((prevState) => !prevState);
  };

  return [toggleScrollLock];
}
