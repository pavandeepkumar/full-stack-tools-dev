"use client"
// DEFINE ALL EXTERNAL IMPORTS
import { useTheme } from "next-themes";
// DEFINE ALL INTERNAL IMPORTS
import { Switch } from "./ui/switch";
export function NavActions() {
  // DEFINE ALL STATE HERE
  const { theme, setTheme } = useTheme();

  // DEFINE ALL THE FUNCTIONS HERE
  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // DEFINE MAIN FUNCTION RETURN HERE
  return (
    <div className="flex items-center gap-2 text-sm">
      <Switch onClick={handleThemeToggle} />
    </div>
  );
}
