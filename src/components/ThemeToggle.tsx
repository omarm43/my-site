
"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder or null to avoid flash of incorrect icon
    return <Button variant="outline" size="icon" className="w-10 h-10 rounded-full shadow-lg" disabled />;
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} aria-label="Toggle theme" className="rounded-full shadow-lg">
      {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Button>
  );
}

