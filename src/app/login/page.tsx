"use client";
import React, { useState,useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import flag from "../../assets/flag.png";
import cloud1 from "../../assets/cloud_1.png";
import cloud2 from "../../assets/cloud_2.png";
import cloud3 from "../../assets/cloud_3.png";
import Image from "next/image";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";



const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [wrong, setWrong] = useState(false);
  


  const notify_failure = () => {
    toast.error("Unauthorized User", {
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

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          emailId: email,
          password: password,
        }
      );
      console.log(response)
      Cookies.set("token", response.data?.["data"].accessToken);
      router.push("/dashbord");
    } catch (error) {
      notify_failure();
      setWrong(true);
    }
  }
  const handleShowpass = () => {  
    setShowPass(!showPass);
  }









  return (
    <section
      className="w-full flex min-h-screen  justify-center items-center relative"
      style={{
        background: "#EEEEEE",
        backgroundSize: "cover",
        overflow: "hidden",
      }}>
       <div className="flex flex-col items-center z-30 shadow-2xl px-[40px] py-[30px] lg:mr-20  rounded-[16px] sn:px-[5px] ">
        <div className="text-center">
          <h1 className="text-[#000000] font-bold text-[32px] m-[15px] sp:m-[2px] sp:text-[24px] sn:text-[20px] ">
            Login
          </h1>
        </div>
        <div>
          <form className="flex flex-col space-y-2" onSubmit={handleLogin}>
            <div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-[#ffffff] rounded-[12px] h-[45px] p-5 sp:p-2 sp:h-[30px] sp:w-[200px] se:p-3 se:h-[40px] se:w-[280px] sn:h-[20px] focus:bg-white sn:w-[230px]"
                id="email"
                placeholder="LoginID"
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
                id="Password"
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
            <br />
            {wrong && (
              <div className="text-red-500 text-xl flex justify-center ">
                <p>Wrong Credentials</p>
                </div>
            )}
            <div className="flex justify-center ">
              <button
                type="submit"
                className="bg-[#981F2B] w-full text-white font-semibold  py-[10px] rounded-[16px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'">
                Login
              </button>
            </div>
          </form>
          <br />
          <div className="flex justify-center font-semibold ns:text-xs">
            <a className="underline hover:cursor-pointer" href="/signup">
              Join Us
            </a>
          </div>
        </div>
      </div>
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
    </section>
  );
};

export default Login;
