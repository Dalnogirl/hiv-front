import React from "react";
import { Header } from "../header";

interface BasePageProps {
  children: React.ReactNode;
}

export const BasePage = ({ children }: BasePageProps) => {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-950 dark:bg-white items-center justify-between">
      <Header />
      <section className="p-4 text-white">{children}</section>
    </main>
  );
};
