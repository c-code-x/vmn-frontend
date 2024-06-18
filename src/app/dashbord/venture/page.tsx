"use client";
import React, { useState,useEffect } from "react";
import venphoto from "@/assets/ven.png";
import Image from "next/image";
import ventureData from '@/data/ventureData';
import axios, { AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { headers } from "next/dist/client/components/headers";
export type data ={
  id: number;
  img: string;
  name: string;
  cname: string;
}


const Venture = () => {
const [add, setAdd] = useState(false);

const [venturename, setVenturename] = useState("");
const [ventureStage, setVentureStage] = useState("");
const [ventureData, setVentureData] = useState(null)
const addventure = () => {
  setAdd(true);
  console.log("addventure");
}

const postdata = () => {
  axios.post("http://localhost:8080/api/coach/venture", {
    ventureName: venturename,
    ventureStage: ventureStage
  }, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`
    }
  }).then((res) => {
    console.log(res);
    setAdd(false);
  }).catch((err) => {
    console.log(err);
  })

  setAdd(false);
}
useEffect(() => {
  const token = Cookies.get("token");
  axios.get("http://localhost:8080/api/coach/venture", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then((res) => {
    const data = res.data.data;
    setVentureData(data);
    console.log(data);
  }).catch((err) => {
    console.log(err);
  })
});
  return (
    <div className="mt-[150px] mx-10 sp:mx-5 se:mx-5 sn:mx-4">
      <div>
        <p className="text-3xl text-[#771B1B]">Ventures</p>
      </div>
      <div className="mt-5 flex justify-between">
        <input
          type="text"
          placeholder="Search"
          className="sp:w-[90vw] se:w-[90vw] w-[40vw] h-[5vh] si:w-[40vw] sr:w-[50vw] sn:w-[90vw] border-[3px] border-slate-400 focus:outline-none rounded-2xl py-1 px-3"
        />
       <button onClick={addventure} className="text-white   bg-[#981F2B] rounded-2xl px-4 py-1 sp:text-[11px] sp:py-1 sp:px-3 sn:text-[9px] sn:py-0.5 sn:px-1 si:text-[15px] si:py-2 si:px-4 sr:text-[16px] sr:py-3 sr:px-6">ADD VENTURE</button>
    </div>
      <div className="mx-auto grid lg:grid-cols-3 gap-6 my-10 md:grid-cols-2 grid-cols-1">
        {ventureData && ventureData.map((data) => (
          <div key={data.id} className="flex flex-row w-[400px] h-[160px] rounded-lg shadow-xl shadow-slate-400 sp:w-[90vw] sp:h-[150px] sn:w-[87vw] sn:h-[20vh] se:w-[90vw] se:h-[170px] si:w-[45vw] si:h-[18vh] sr:w-[45vw] sr:h-[16vh]">
            <div className="rounded-tl-lg rounded-bl-lg w-[150px] h-[160px] sp:h-[150px]">
              <div className="w-full h-full object-contain">
                <Image
                  width={100}
                  height={100}
                  src={venphoto}
                  alt="Profile"
                  className="w-[150px] h-[160px] sp:w-[150px] sp:h-[150px] sn:w-[95px] sn:h-[20vh] se:h-[170px] si:h-[18vh] sr:h-[16vh] rounded-tl-lg rounded-bl-lg"
                />
              </div>
            </div>
            <div className="flex-col flex p-2">
              <h1 className="font-bold text-[18px] sp:text-[17px] sn:text-[12px] si:text-[15px] sr:text-[19px]">Venture : {data.name}</h1>
              <h1 className="font-bold text-[18px] sp:text-[15px] sn:text-[9px] si:text-[13px] sr:text-[15px]">Sector : {data.sector}</h1>
              <h1 className="font-bold text-[18px] sp:text-[15px] sn:text-[9px] si:text-[13px] sr:text-[15px]">Stage : {data.stage}</h1>
              <div className="flex flex-row font-semibold mt-8 gap-2 sp:gap-1 flex justify-center">
                <button  className="text-white bg-[#981F2B] rounded-2xl px-4 py-1 sp:text-[11px] sp:py-1 sp:px-3 sn:text-[9px] sn:py-0.5 sn:px-1 si:text-[15px] si:py-2 si:px-4 sr:text-[16px] sr:py-3 sr:px-6">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {
        add && (
          <div className="fixed top-0 laptop:left-[40vw] tablet:left-[35vw]   tablet:w-[30vw]  laptop:w-[30vw] h-full flex justify-center items-center">
            <div className="bg-white p-4 rounded shadow-lg space-y-5">
            <div className="flex justify-center">
              <button  className=" text-white   bg-[#981F2B] rounded-2xl px-4 py-1 sp:text-[11px] sp:py-1 sp:px-3 sn:text-[9px] sn:py-0.5 sn:px-1 si:text-[15px] si:py-2 si:px-4 sr:text-[16px] sr:py-3 sr:px-6">VENTURE DETAILS</button>
            </div>
              
              <input
                type="text"
                onChange={(e) =>setVenturename(e.target.value)}
                placeholder="Venture Name"
                className="w-[20vw] h-[5vh] si:w-[40vw] sr:w-[50vw] sn:w-[90vw] border-[3px] border-slate-400 focus:outline-none rounded-2xl py-1 px-3"
              />
              <input
                type="text"
                onChange={(e) =>setVentureStage(e.target.value)}
                placeholder="Venture Stage"
                className="w-[20vw] h-[5vh] si:w-[40vw] sr:w-[50vw] sn:w-[90vw] border-[3px] border-slate-400 focus:outline-none rounded-2xl py-1 px-3 my-5 flex justify-center"
              />
              <div className="flex justify-center">
              <button onClick={postdata} className=" text-white   bg-[#981F2B] rounded-2xl px-4 py-1 sp:text-[11px] sp:py-1 sp:px-3 sn:text-[9px] sn:py-0.5 sn:px-1 si:text-[15px] si:py-2 si:px-4 sr:text-[16px] sr:py-3 sr:px-6">ADD</button>
              </div>
              
            </div>
        
          </div>
        )
      }
    </div>
  );
};

export default Venture;
