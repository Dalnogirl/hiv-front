"use client";
import React from "react";
import { NavMenu } from "../nav-menu";
import { ThemeSwitcher } from "@/components/widgets/theme-switcher";
import { Separator } from "@/components/ui/separator";

export const Header = () => {
  return (
    <div className="w-full p-4 flex justify-between dark:bg-zinc-950  align-middle flex-col gap-4">
      <div className="flex justify-between">
        <NavMenu />
        <ThemeSwitcher />
      </div>
      <Separator />
    </div>
  );
};
