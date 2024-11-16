import React, { useEffect, useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDark]);

  return (
    <Toggle
      checked={isDark}
      onChange={({ target }) => setIsDark(target.checked)}
      icons={{
        checked: "🌙",
        unchecked: "🔆",
      }}
      aria-label="Dark mode toggle"
    />
  );
};
