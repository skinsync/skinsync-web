import React from "react";
import Header from "@/components/header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      {children}
    </>
  );
}
