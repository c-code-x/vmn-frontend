"use client";
import { ChangeEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import flag from "../../assets/flag.png";
import cloud1 from "../../assets/cloud_1.png";
import cloud2 from "../../assets/cloud_2.png";
import cloud3 from "../../assets/cloud_3.png";
import Image from "next/image";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [conPass, setConpass] = useState("");
  const [linkedinId, setLinkedId] = useState("");
  const [phno, setPhno] = useState("");
  const [designation, setDesignation] = useState("");
   const [profilePic, setProfilePic] = useState<File | null>(null);

  const notify_failure = () => {
    toast.error("Backend Not Connected", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleFile = (e:ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Corrected the typo in the event handler
    if(file){setProfilePic(file)};
  };

  const handleLogin:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(email + " " + password);
    setError("Backend Not Connected");
    notify_failure();
  };

  const handleShowpass = () => {
    setShowPass(!showPass);
  };

  return (
    <>
      <style>
        {`
                @keyframes cloudMove1 {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
                @keyframes cloudMove2 {
                    0% {
                        transform: translateX(-200%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
                @keyframes cloudMove3 {
                    0% {
                        transform: translateX(-150%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
                html,
                body {
                overflow: hidden;
                height: 100%;
                margin: 0;
                padding: 0;
                }
                @media (min-width: 320px) and (min-height: 480px),
                (min-width: 300px) and (min-height: 460px),
            (min-width: 360px) and (min-height: 640px),
            (min-width: 375px) and (min-height: 667px),
            (min-width: 414px) and (min-height: 736px),
            (min-width: 480px) and (min-height: 800px),
            (min-width: 540px) and (min-height: 960px),
            (min-width: 600px) and (min-height: 1024px),
            (min-width: 640px) and (min-height: 1136px),
            (min-width: 720px) and (min-height: 1280px),
            (min-width: 750px) and (min-height: 1334px),
            (min-width: 768px) and (min-height: 1024px),
            (min-width: 800px) and (min-height: 1280px),
            (min-width: 900px) and (min-height: 1440px),
            (min-width: 960px) and (min-height: 540px),
            (min-width: 1024px) and (min-height: 768px),
            (min-width: 1080px) and (min-height: 1920px),
             // the below ones are just a precautionary lengths 
            (min-width: 1125px) and (min-height: 2436px),
            (min-width: 1170px) and (min-height: 2532px),
            (min-width: 1280px) and (min-height: 800px),
            (min-width: 1334px) and (min-height: 750px),
            (min-width: 1366px) and (min-height: 768px),
            (min-width: 1440px) and (min-height: 900px),
            (min-width: 1440px) and (min-height: 2560px),
            (min-width: 1544px) and (min-height: 720px),
            (min-width: 1680px) and (min-height: 1050px),
            (min-width: 1920px) and (min-height: 1080px) {
                .cloud-animation-1 {
                    animation-duration: 1s;
                }
                .cloud-animation-2 {
                    animation-duration: 3s;
                }
                .cloud-animation-3 {
                    animation-duration: 20s;
                }
            }
                `}
      </style>
      <section
        className="max-w-screen flex min-h-screen lg:justify-end justify-center items-center relative"
        style={{
          background: "#CCE2EA",
          backgroundSize: "cover",
          overflow: "hidden",
        }}>
        <Image
          src={flag}
          alt="flag"
          className="absolute lg:w-[85vw] bottom-0 right-0 z-10"
        />
        <Image
          src={cloud1}
          alt="cloud"
          className="absolute cloud-animation-1"
          style={{
            animation: "cloudMove1 10s linear infinite",
            width: "449px",
            height: "218.055px",
            left: "0",
            top: "150px",
            zIndex: "5",
          }}
        />
        <Image
          src={cloud2}
          alt="cloud"
          className="absolute cloud-animation-2"
          style={{
            animation: "cloudMove2 25s linear infinite",
            width: "449px",
            height: "218.055px",
            left: "0",
            top: "250px",
          }}
        />
        <Image
          src={cloud3}
          alt="cloud"
          className="absolute cloud-animation-3"
          style={{
            animation: "cloudMove3 15s linear infinite",
            width: "449px",
            height: "200.055px",
            left: "0",
            top: "450px",
          }}
        />

        <div className="flex flex-col bg-white/ sm:mt-0 mt-[100px] items-center z-30 shadow-2xl px-[40px] py-[10px] lg:mr-20  rounded-[16px] sn:px-[5px] ">
          <div className="text-center">
            <h1 className="text-[#000000] font-bold text-[32px] m-[10px] sp:m-[2px] sp:text-[24px] sn:text-[20px] ">
              Sign Up
            </h1>
          </div>
          <div>
            <form className="flex flex-col " onSubmit={handleLogin}>
              <div className="flex lg:flex-row flex-col lg:space-x-5">
                <div className="flex flex-col space-y-2">
                  <div>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 bg-[#ffffff] rounded-[12px] h-[45px] p-5 sp:p-2 sp:h-[30px] sp:w-[200px] se:p-3 se:h-[40px] se:w-[280px] sn:h-[20px] focus:bg-white sn:w-[230px]"
                      id="name"
                      placeholder="Full Name"
                      autoComplete="new-password"
                      required
                    />
                    <br />
                  </div>
                  <div>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-[#ffffff] rounded-[12px] h-[45px] p-5 sp:p-2 sp:h-[30px] sp:w-[200px] se:p-3 se:h-[40px] se:w-[280px] sn:h-[20px] focus:bg-white sn:w-[230px]"
                      id="email"
                      placeholder="Email ID"
                      autoComplete="new-password"
                      required
                    />
                    <br />
                  </div>
                  <div>
                    <input
                      type={showPass ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-[#ffffff] rounded-[12px] h-[45px] p-5 sp:p-2 sp:h-[30px] sp:w-[200px] se:p-3 se:h-[40px] se:w-[280px] sn:h-[20px] sn:w-[230px]"
                      placeholder="Password"
                      autoComplete="new-password"
                      id="Password"
                      required
                    />
                    <br />
                  </div>
                  <div>
                    <input
                      type={showPass ? "text" : "password"}
                      value={conPass}
                      onChange={(e) => setConpass(e.target.value)}
                      className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-[#ffffff] rounded-[12px] h-[45px] p-5 sp:p-2 sp:h-[30px] sp:w-[200px] se:p-3 se:h-[40px] se:w-[280px] sn:h-[20px] sn:w-[230px]"
                      placeholder="Confirm Password"
                      id="Confirm Password"
                      autoComplete="new-password"
                      required
                    />
                    <br />
                    <input
                      className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                      type="checkbox"
                      id="show-password"
                      checked={showPass}
                      onChange={handleShowpass}
                    />
                    <label
                      className="text-slate-400 font-semibold text-[16px] ml-[10px]"
                      htmlFor="show-password">
                      Show Password
                    </label>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div>
                    <input
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      type="text"
                      className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-[#ffffff] rounded-[12px] h-[45px] p-5 sp:p-2 sp:h-[30px] sp:w-[200px] se:p-3 se:h-[40px] se:w-[280px] sn:h-[20px] focus:bg-white sn:w-[230px]"
                      id="designation"
                      placeholder="Designation"
                      autoComplete="new-password"
                      required
                    />
                    <br />
                  </div>
                  <div>
                    <input
                      value={linkedinId}
                      onChange={(e) => setLinkedId(e.target.value)}
                      type="url"
                      className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-[#ffffff] rounded-[12px] h-[45px] p-5 sp:p-2 sp:h-[30px] sp:w-[200px] se:p-3 se:h-[40px] se:w-[280px] sn:h-[20px] focus:bg-white sn:w-[230px]"
                      id="linked In ID"
                      placeholder="Linkedin Id"
                      autoComplete="new-password"
                      required
                    />
                    <br />
                  </div>
                  <div>
                    <input
                      value={phno}
                      onChange={(e) => setPhno(e.target.value)}
                      type="tel"
                      className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-[#ffffff] rounded-[12px] h-[45px] p-5 sp:p-2 sp:h-[30px] sp:w-[200px] se:p-3 se:h-[40px] se:w-[280px] sn:h-[20px] focus:bg-white sn:w-[230px]"
                      id="phno"
                      placeholder="Phone Number (+91)"
                      autoComplete="new-password"
                      required
                    />
                    <br />
                  </div>
                  <div>
                    <label
                      className="text-slate-400 font-semibold text-[16px] ml-[10px]"
                      htmlFor="show-password">
                      Upload Profile Pic
                    </label>
                    <br />
                    <input
                      type="file"
                      onChange={handleFile}
                      className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-[#ffffff] rounded-[12px] h-[45px] p-3 sp:p-2 sp:h-[30px] sp:w-[200px] se:p-3 se:h-[40px] se:w-[280px] sn:h-[20px] sn:w-[230px]"
                      required
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#492DD8] w-1/2 text-white font-semibold  py-[10px] rounded-[16px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'">
                  Sign Up
                </button>
              </div>
            </form>
            <br />
            <div className="flex flex-row justify-center font-semibold ns:text-xs">
              <a className="underline hover:cursor-pointer" href="/login">
                Already have an account? Login
              </a>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default SignUp;
