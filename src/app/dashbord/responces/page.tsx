"use client"
import React, { useState } from "react";
import responceData from "@/data/responces";

const Responces = () => {
  const [modalContent, setModalContent] = useState(null);
  const eyeSymbol = "\uD83D\uDC41";

  const truncateString = (str:any, maxLength:number, index:any) => {
    if (str.length <= maxLength) {
      return str;
    } else {
      return (
        <>
          <span>{str.slice(0, maxLength)}...</span>
          <span className="relative inline-block ml-1 text-[#yourColorHere] cursor-pointer" onClick={() => setModalContent(str)}>
            {eyeSymbol}
          </span>
          
        </>
      );
    }
  };

  return (
    <div className="relative bg-[#f0f0f6] h-screen overflow-y-scroll">
      <div className="mt-[120px] border-4 border-[#981F2B] h-[80vh] m-9">
        <div className="text-center flex item-center justify-center relative -top-7">
          <p className="text-[#FFFFFF] p-2 font-bold text-[32px] sp:text-[20px] se:text-[20px] bg-[#981F2B] rounded-lg sn:text-[20px]">INTERESTED FORM</p>
        </div>
        <div className="relative overflow-x-auto phone:hidden">
          <table className="w-full text-sm text-center  text-[#000000] ">
            <thead className="text-lg text-[#000000] uppercase ">
              <tr>
                <th className="px-6 py-3">FULL NAME</th>
                <th className="px-6 py-3">MAIL ID</th>
                <th scope="col" className="px-6 py-3">MOBILE NUMBER</th>
                <th scope="col" className="px-6 py-3">INTERESTED AS</th>
                <th scope="col" className="px-6 py-3">DESCRIBE YOUR INTEREST</th>
              </tr>
            </thead>
            <tbody>
              {responceData.map((data, index) => (
                <tr className=" border-t border-black " key={index}>
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{data.name}</th>
                  <td className="px-6 py-4">{data.email}</td>
                  <td className="px-6 py-4">{data.phno}</td>
                  <td className="px-6 py-4">{data.role}</td>
                  <td className="px-6 py-4">{truncateString(data.msg, 15, index)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="laptop:hidden tablet:hidden  w-full sp:p-5 se:p-3 h-[65vh]  space-y-5 overflow-x-auto  bg-white">
                {responceData.map((data:any,index) => ([
                    <div className="flex flex-row se:w-[80vw] bg-[#f3f4f6] rounded-2xl " >
                        <div className="p-5">
                            <p>{data.name}</p>
                            <p>{data.email}</p>
                            <p>{data.phno}</p>
                            <p>{data.role}</p>
                            <p>{truncateString(data.msg, 15, index)}</p>
                        </div>
                    </div>
                    ]))
                    }
        </div>
      </div>
      {modalContent && (
        <div className="fixed top-0 laptop:left-[40vw] tablet:left-[35vw]   tablet:w-[30vw]  laptop:w-[30vw] h-full flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <p>{modalContent}</p>
            <div className="text-center flex item-center justify-center py-2">
                <button onClick={() => setModalContent(null)} className="text-white bg-[#981F2B] p-2 rounded-lg">Close</button>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Responces;
