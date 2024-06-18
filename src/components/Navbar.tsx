  "use client";
  import { useRouter } from "next/router";
  import { useEffect, useState, useRef } from "react";
  import vdc from "../assets/VDC logo.png";
  import vmn from "../assets/VDC.png";
  import wvmn from "../assets/VMN.png"
  import { usePathname } from "next/navigation";
  import hamburger from "../assets/hamburger.png";
  import close from "../assets/close.png";
  import Image from "next/image";
  import Cookies from "js-cookie";
  export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isAuth,setisAUTH] = useState(false)
    const location = usePathname();
    useEffect(()=>{
      const token=Cookies.get("token");
      setisAUTH(!!token)
      
      
    },[])

    function toogleSidebar() {
      setOpen((prevOpen) => !prevOpen);
    }
    const handellogout = () =>{
      Cookies.remove("token");
      setisAUTH(false);
      window.location.href = '/login';
      
    }
    return (
      <>
      {isAuth && window.location.pathname.includes('/dashbord')?
      (
        <div
        className={`flex flex-row justify-between top-0 w-screen h-[65px] fixed z-50 bg-[#981F2B] ${
          location === "/"
            ? ""
            : ""
        }`}>
        <div className="items-center">
          <a>
            <Image
              src={wvmn}
              className="w-auto h-[50px] m-2"
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
                location === "/dashbord"
                  ? "border-b-2 border-b-[#fb8122]"
                  : ""
              } text-white`}
              href="/dashbord">
              Dashbord
            </a>
          </div>
          <div>
            <button className=" mx-3 text-white" onClick={handellogout}>Logout</button>
          </div>
          
        </div>

        <div
          className={`md:hidden h-screen ${
            open ? "w-48" : "w-0"
          } duration-500 z-40 fixed right-0 bg-[#981F2B]`}>
          <div className="flex flex-col mt-20 text-center text-[15px] text-white font-sans lg:font-bolder">
            <div className="py-[20px]">
              <a
              className={`mx-3 ${
                location === "/dashbord"
                  ? "border-b-2 border-b-[#fb8122]"
                  : ""
              } text-white`}
              href="/dashbord">
              Dashbord
              </a>
            </div>
            <div className="py-[20px]" >
              <button className="text-white" onClick={handellogout}>Logout</button>
            </div>
            
          </div>
        </div>
      </div>
      )
      :(
        <div
        className={`flex flex-row justify-between top-0 w-screen h-[65px] fixed z-50 bg-white ${
          location === "/"
            ? ""
            : ""
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
                  ? "w-auto h-[60px] m-2"
                  : "w-auto h-[60px] m-1"
              }`}
              alt="Logo"
              priority
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
              } text-[#981F2B]`}
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
              } text-[#981F2B]`}
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
              } text-[#981F2B]`}
              href="/signup">
              Join Us
            </a>
          </div>
        </div>

        <div
          className={`md:hidden h-screen ${
            open ? "w-48" : "w-0"
          } duration-500 z-40 fixed right-0 bg-[#FFFFFF]`}>
          <div className="flex flex-col mt-20 text-center text-[15px] text-white font-sans lg:font-bolder">
            <div className="py-[20px]">
              <a
                className={`${
                  location === "/aboutus"
                    ? "border-b-2 border-b-[#fb8122]"
                    : "hover:border-b-2 hover:border-b-back"
                } text-[#981F2B] font-bold`}
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
                } text-[#981F2B] font-bold`}
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
                } text-[#981F2B] font-bold`}
                href="/signup">
                Join Us
              </a>
            </div>
          </div>
        </div>
      </div>
      )}
      </>
      
    );
  }
