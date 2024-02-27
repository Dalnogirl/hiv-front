"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

enum Themes {
  light = "light",
  dark = "dark",
}

export const ThemeSwitcher = () => {
  const setTheme = (a: Themes) => {
    const htmlElement = document.body;
    Object.values(Themes).forEach((theme) => {
      if (theme === a) return;
      htmlElement?.classList.remove(theme);
    });
    debugger
    htmlElement?.classList.add(a);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme(Themes.light)}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(Themes.dark)}>
          Dark
        </DropdownMenuItem>
        {/* <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
