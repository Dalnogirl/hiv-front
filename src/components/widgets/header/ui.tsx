"use client";
import React from "react";
import { NavMenu } from "../nav-menu";

export const Header = () => {
  return (
    <div className="border-b-4 border-white w-full p-4 flex justify-between bg-zinc-950 dark:bg-whi align-middle">
      <NavMenu />
    </div>
  );
};
