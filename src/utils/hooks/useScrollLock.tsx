import { useState, useEffect } from "react";

export default function useScrollLock() {
  const bodyStyle = document.body.style;
  const [isLocked, setIsLocked] = useState(bodyStyle.overflowY === "hidden");

  useEffect(() => {
    bodyStyle.overflowY = isLocked ? "hidden" : "auto";
  }, [bodyStyle, isLocked]);

  const toggleScrollLock = () => {
    setIsLocked(() => !isLocked);
  };

  return [toggleScrollLock];
}
