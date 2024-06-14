"use client";
import man from "../assets/man-with-bg.png";
import logo from "../assets/VMN.png";
import bg from "../assets/bg.png"
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const LandingPage = () => {
  const location = usePathname();
  const navigate = useRouter();
  return (
    <div className="relative overflow-y-hidden h-screen ">
      <Image
        src={bg}
        alt="Background"
        layout="fill" 
        objectFit="cover"
        quality={100}
        className="opacity-80"
        
      />
      
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10  ">
        <div className="flex flex-col items-center bg-white p-3 sn:p-2  rounded-lg">
          <div className="">
          <svg
                className="w-[300px] sn:w-[100px]"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="b">
                    <stop offset="0%" stopColor="#981F2B" />
                    <stop offset="100%" stopColor="#981F2B" />
                  </linearGradient>
                  <linearGradient id="c">
                    <stop offset="0%" stopColor="#981F2B" />
                    <stop offset="100%" stopColor="#981F2b" />
                  </linearGradient>
                  <clipPath id="a">
                    <path
                      fill="currentColor"
                      d="M833 676.5q-52 176.5-231.5 170T237 778Q52 716 54.5 501.5t188-266q185.5-51.5 374-85t228.5 158q40 191.5-12 368Z"
                    />
                  </clipPath>
                </defs>
                <g clipPath="url(#a)">
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
                className="absolute w-[150px] sn:w-[50px] tablet:w-[140px]  h-[50px] mt-[-200px] ml-20
                 sn:mt-[-60px] sn:ml-5">
                <Image src={logo} alt="vmn" />
              </div>
          </div>
          <div className="flex w-[500px] tablet:w-[400px] sp:w-[300px] se:w-[300px] sn:w-[200px]  ">
              <p className=" text-center  text-sm sm:text-lg md:text-xl sn:text-xs">
                <span className="text-[#981F2B]">Venture Mentor Network </span>
                connects aspiring entrepreneurs With experienced mentors, fostering growth and success. Empowering entrepreneurs to reach new heights.
              </p>
          </div>
          <div className="flex space-x-8 mt-10">
            <button
              className="bg-[#981F2B] font-bold text-white py-2 px-7 rounded-2xl text-base sm:text-lg md:text-xl sp:text-[11px] se:text-[10px] sn:text-[7px] "
              onClick={() => navigate.push("/mentors")}
             
            >
              Find a mentor
            </button>
            <button
              className="border-2 border-[#981F2B] text-[#981F2B] font-bold py-2 px-7 rounded-2xl text-base sm:text-lg md:text-xl sp:text-[11px] se:text-[10px] sn:text-[7px]"
              onClick={() => navigate.push("/signup")}
              
            >
              BE A MENTOR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
