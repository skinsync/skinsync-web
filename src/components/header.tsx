import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="navbar sticky top-0 z-50 max-w-screen-xl mx-auto">
      <div className="flex-none">
        <div className="avatar">
          <div className="w-24 rounded">
            <Image src="skinsync.svg" alt="Skinsync logo" width={124} height={124}/>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <a className="text-xl hover:bg-transparent font-serif font-semibold">SkinSync</a>
      </div>
      <div className="hidden md:flex flex-none">
        <ul className="menu menu-horizontal px-1 font-sans font-medium">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Team</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
