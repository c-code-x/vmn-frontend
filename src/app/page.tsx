"use client";
import man from "../assets/man-with-bg.png";
import logo from "../assets/VMN logo.png";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import wave from "../assets/wave.png";

const LandingPage = () => {
  const location = usePathname();
  const navigate = useRouter();
  return (
    <div className=" flex h-screen w-full items-center  justify-center overflow-y-scroll  relative">
      <Image
        alt="Wave"
        src={wave}
        className={`${
          location === "/"
            ? "hidden md:flex md:fixed md:top-0 md:w-screen md:h-[24vh]"
            : "hidden"
        }`}
      />
      <div className="flex sp:mt-[300px] se:mt-[200px] sm:flex-row sp:flex-col-reverse se:flex-col-reverse lg:mt-0  exMd:pb-10 md:flex-col-reverse md:mt-[200px] lg:flex-row items-center justify-center gap-16 xl:gap-[200px] mt-[100px]">
        <div className="sp:flex sp:flex-col sp:justify-center sp:items-center se:flex-col se:justify-center se:items-center sp:gap-1 ns:hidden se:flex lg:flex lg:justify-center lg:flex-col lg:gap-3 lg:items-center ">
          <div className="">
            <div className="flex justify-center items-center se:w-[250px] sp:w-[250px] md:w-[300px] -mt-8 md:-mt-0 lg:w-[400px] xl:w-[500px] sr:w-[300px]">
              <svg
                className="w-[400px]"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="b">
                    <stop offset="0%" stop-color="#4B0082" />
                    <stop offset="100%" stop-color="#4338CA" />
                  </linearGradient>
                  <linearGradient id="c">
  <stop offset="0%" stop-color="#FF512F" />
  <stop offset="100%" stop-color="#F09819" />
</linearGradient>
                  <clipPath id="a">
                    <path
                      fill="currentColor"
                      d="M833 676.5q-52 176.5-231.5 170T237 778Q52 716 54.5 501.5t188-266q185.5-51.5 374-85t228.5 158q40 191.5-12 368Z"
                    />
                  </clipPath>
                </defs>
                <g clip-path="url(#a)">
                  <path fill="url(#c)">
                    <animate
                      attributeName="d"
                      dur="10000ms"
                      repeatCount="indefinite"
                      values="M833 676.5q-52 176.5-231.5 170T237 778Q52 716 54.5 501.5t188-266q185.5-51.5 374-85t228.5 158q40 191.5-12 368Z;M791.5 663Q760 826 587 851.5T298 765Q182 653 142.5 481T247 165.5Q391 22 589.5 80.5t216 239Q823 500 791.5 663Z;
                      M854 657.5Q751 815 587.5 823T285 751q-139-80-99-231.5T320.5 247Q415 126 604 129.5t271 187q82 183.5-21 341Z;
                      M833 676.5q-52 176.5-231.5 170T237 778Q52 716 54.5 501.5t188-266q185.5-51.5 374-85t228.5 158q40 191.5-12 368Z;"></animate>
                  </path>
                </g>
              </svg>
              <div
                className="absolute w-[150px] tablet:w-[120px] phone:w-[85px] h-[50px] mt-[-50px]
                tablet:mt-[-18px] phone:mt-0">
                <Image src={logo} alt="vmn" />
              </div>
            </div>
          </div>
          <div className="flex w-[400px] tablet:w-[400px] phone:w-[300px] laptop:mt-[-65px] ">
            <p className="desktop:text-[25px] si:text-[25px] laptop:text-[20px] tablet:text-[20px] phone:text-[20px] font-serif font-medium text-black-600/50">
            A dedicated platform to provide these entrepreneurs access to an accomplished network of mentors, professionals, entrepreneurs, innovators, and subject matter experts with experience & skills across a variety of industries and functional areas with unceasing enthusiasm to support and give back to the community and its next generation of ardent entrepreneurs.{" "}
            </p>
          </div>
        </div>
        <div>
          <Image
            src={man}
            alt="blob"
            className="w-auto h-[300px] si:h-[450px] sp:h-[220px] se:h-[250px] sp:w-[450px]"
          />
          <div className="flex md:justify-between justify-center space-x-2 flex-row si:h-[50px]">
            <button
              className="flex bg-[#FB8122] py-3 px-5 text-white font-medium rounded-lg desktop:text-[24px] si:text-[25px] laptop:text-[19px] text-[16px]"
              onClick={() => {
                navigate.push("/mentors");
              }}>
              Find a mentor
            </button>
            <button
              className="flex border-2 border-[#FB8122] bg-transparent si:text-[25px] text-[#FB8122] py-3 px-5 rounded-lg desktop:text-[24px] laptop:text-[19px] text-[16px]"
              onClick={() => {
                navigate.push("/signup");
              }}>
              Be a mentor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
