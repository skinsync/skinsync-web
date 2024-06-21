import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex place-items-center sticky top-0 z-50 w-full mx-auto backdrop-blur-sm bg-[#ffd9d9] bg-opacity-25">
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="flex-none">
          <div className="avatar">
            <div className="w-24 rounded">
              <Image
                src="skinsync.svg"
                alt="Skinsync logo"
                width={124}
                height={124}
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <a className="text-xl hover:bg-transparent font-serif font-semibold">
            SkinSync
          </a>
        </div>
        <div className="hidden md:flex flex-none">
          <ul className="menu menu-horizontal px-1 font-sans font-medium">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-bottom dropdown-end md:hidden">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-[#fde7ce] rounded-box w-52"
          >
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
    </div>
  );
}
