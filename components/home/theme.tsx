import { cn } from "@/lib/utils";
import { useTheme } from "nextra-theme-docs";
import { createContext, useContext, useState } from "react";
import { Button } from "../ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BlendingModeIcon } from "@radix-ui/react-icons";

type ThemeContextType = {
  colorTheme: string;
  setColorTheme: (theme: string) => void;
  appearance: string;
  setAppearance: (appearance: string) => void;
};
const ThemeContext = createContext<ThemeContextType>({
  colorTheme: "zinc",
  setColorTheme: () => {},
  appearance: "light",
  setAppearance: () => {},
});

export function ThemeWrapper({ children }) {
  const [colorTheme, setColorTheme] = useState("zinc");
  const { theme, setTheme, resolvedTheme } = useTheme();
  return (
    <ThemeContext.Provider
      value={{
        colorTheme,
        setColorTheme,
        appearance: theme,
        setAppearance: setTheme,
      }}
    >
      <div>
        <div
          className={cn(
            "mmm",
            resolvedTheme,
            colorTheme === "zinc" ? "" : colorTheme
          )}
        >
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

const THEMES = ["zinc", "red", "yellow", "green", "blue", "violet"];

const primaryColors = {
  zinc: "#71717a",
  blue: "#3b82f6",
  green: "#22c55e",
  red: "#ef4444",
  yellow: "#facc15",
  violet: "#8b5cf6",
};

export function ThemeSwitcher() {
  const { colorTheme, setColorTheme } = useContext(ThemeContext);
  return (
    <Popover>
      <PopoverTrigger className="gap-2 border" asChild>
        <Button variant="outline" size="sm" className="capitalize">
          <BlendingModeIcon />
          <div
            style={{
              backgroundColor: primaryColors[colorTheme],
            }}
            className="rounded-full inline-flex w-5 h-5"
          ></div>
          {colorTheme}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <h4 className="font-semibold text-sm mb-2">Color Theme</h4>
        <ToggleGroup
          className="grid grid-cols-1 sm:grid-cols-2"
          type="single"
          value={colorTheme}
          onValueChange={(value) => setColorTheme(value)}
        >
          {THEMES.map((theme) => (
            <ToggleGroupItem
              value={theme}
              key={theme}
              className="justify-between gap-2 border capitalize"
            >
              <div
                style={{
                  backgroundColor: primaryColors[theme],
                }}
                className="rounded-full inline-flex w-5 h-5"
              ></div>
              {theme}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </PopoverContent>
    </Popover>
  );
}
