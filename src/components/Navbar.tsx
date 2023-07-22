"use client";
import { useEffect, useState, useRef } from "react";
import vdc from "../assets/VDC logo.png";
import vmn from "../assets/VMN logo.png";
import { usePathname } from "next/navigation";
import hamburger from "../assets/hamburger.png";
import close from "../assets/close.png";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = usePathname();

  const toogleSidebar = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <div
      className={`flex flex-row justify-between top-0 w-screen h-[65px] fixed z-50 ${
        location === "/"
          ? "md:bg-transparent exMd:bg-gradient-to-br from-purple-900 to-indigo-600"
          : "bg-gradient-to-br shadow-lg from-purple-900 to-indigo-600 transition-colors ease-in-out duration-[5000ms]"
      }`}>
      <div className="items-center">
        <a href="/">
          <Image
            src={
              location === "/" || location === "/aboutus"
                ? vdc
                : vmn
            }
            className={`${
              location !== "/aboutus" && location !== "/"
                ? "w-auto h-[45px] m-2"
                : "w-auto h-[50px] m-1"
            }`}
            alt="Logo"
          />
        </a>
      </div>
      <button
        onClick={toogleSidebar}
        className="md:hidden bg-none mr-5 border-none  z-50  navbar-button">
        <Image
          alt="menu"
          className="w-auto h-[20px]"
          src={open ? close : hamburger}
        />
      </button>

      <div className="hidden md:flex md:flex-row md:items-center md:text-[18px] md:justify-between md:text-white md:font-sans md:font-bold md:mr-10">
        <div>
          <a
            className={`mx-3 ${
              location === "/aboutus"
                ? "border-b-2 border-b-[#fb8122]"
                : ""
            } hover:text-[#fb8122]`}
            href="/aboutus">
            About Us
          </a>
        </div>
        <div>
          <a
            className={`mx-3 ${
              location === "/login"
                ? "border-b-2 border-b-[#fb8122]"
                : ""
            } hover:text-[#fb8122]`}
            href="/login">
            Login
          </a>
        </div>
        <div>
          <a
            className={`mx-3 ${
              location === "/signup"
                ? "border-b-2 border-b-[#fb8122]"
                : ""
            } hover:text-[#fb8122]`}
            href="/signup">
            Sign Up
          </a>
        </div>
      </div>

      <div
        className={`md:hidden h-screen ${
          open ? "w-48" : "w-0"
        } duration-500 z-40 fixed right-0 bg-gradient-to-br from-purple-900 to-indigo-600`}>
        <div className="flex flex-col mt-20 text-center text-[15px] text-white font-sans lg:font-bolder">
          <div className="py-[20px]">
            <a
              className={`${
                location === "/aboutus"
                  ? "border-b-2 border-b-[#fb8122]"
                  : "hover:border-b-2 hover:border-b-back"
              } hover:text-[#fb8122]`}
              href="/aboutus">
              About Us
            </a>
          </div>
          <div className="py-[20px]">
            <a
              className={`${
                location === "/login"
                  ? "border-b-2 border-b-[#fb8122]"
                  : "hover:border-b-2 hover:border-b-back"
              } hover:text-[#fb8122]`}
              href="/login">
              Login
            </a>
          </div>
          <div className="py-[20px]">
            <a
              className={`${
                location === "/signup"
                  ? "border-b-2 border-b-[#fb8122]"
                  : "hover:border-b-2 hover:border-b-back"
              } hover:text-[#fb8122]`}
              href="/signup">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
