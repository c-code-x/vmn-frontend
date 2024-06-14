"use client";
import React, { useState } from "react";
import Image from "next/image";
import couchData from '../data/couchData';
export type data ={
  id: number;
  img: string;
  name: string;
  email: string;
  role: string;
}

const MentorView = () => {
  const [searchName, setSearchName] = useState("");
  const [filteredSearch, setFilteredSearch] = useState(couchData);
  const searchData = (e:any) => {
    const query = e.target.value.toLowerCase();
    setSearchName(query);
    const filtered = couchData.filter((mentor) =>
      mentor.name.toLowerCase().includes(query)
    );
    setFilteredSearch(filtered);
  };

  return (
    <div>
      <div>
        <p className="text-3xl text-[#771B1B]">Mentors</p>
      </div>
      <div className="mt-5">
        <input
          type="text"
          placeholder="Search"
          value={searchName}
          onChange={searchData}
          className="sp:w-[90vw] se:w-[90vw] w-[40vw] h-[5vh] si:w-[40vw] sr:w-[50vw] sn:w-[90vw] border-[3px] border-slate-400 focus:outline-none rounded-2xl py-1 px-3"
        />
      </div>
      <div className="mx-auto grid lg:grid-cols-3 gap-6 my-10 md:grid-cols-2 grid-cols-1">
        {filteredSearch.map((data:any) => (
          <div key={data.id} className="flex flex-row w-[400px] h-[160px] rounded-lg shadow-xl shadow-slate-400 sp:w-[90vw] sp:h-[150px] sn:w-[87vw] sn:h-[20vh] se:w-[90vw] se:h-[170px] si:w-[45vw] si:h-[18vh] sr:w-[45vw] sr:h-[16vh]">
            <div className="rounded-tl-lg rounded-bl-lg w-[150px] h-[160px] sp:h-[150px]">
              <div className="w-full h-full object-contain">
                <Image
                  width={150}
                  height={160}
                  src={data.img}
                  alt="Profile"
                  className="w-[150px] h-[160px] sp:w-[150px] sp:h-[150px] sn:w-[95px] sn:h-[20vh] se:h-[170px] si:h-[18vh] sr:h-[16vh] rounded-tl-lg rounded-bl-lg"
                />
              </div>
            </div>
            <div className="flex-col flex p-2">
              <h1 className="font-bold text-[18px] sp:text-[17px] sn:text-[12px] si:text-[15px] sr:text-[19px]">{data.name}</h1>
              <h1 className="font-bold text-[18px] sp:text-[15px] sn:text-[9px] si:text-[13px] sr:text-[15px]">{data.email}</h1>
              <p className="font-bold text-[18px] sp:text-[15px] sn:text-[9px] si:text-[13px] sr:text-[15px]">{data.role}</p>
              <div className="flex flex-row font-semibold mt-3 gap-2 sp:gap-1">
                <button className="text-white bg-[#981F2B] rounded-2xl px-4 py-1 sp:text-[11px] sp:py-1 sp:px-3 sn:text-[9px] sn:py-0.5 sn:px-1 si:text-[15px] si:py-2 si:px-4 sr:text-[16px] sr:py-3 sr:px-6">Transfer</button>
                <button className="text-[#981F2B] border-[#981F2B] border-[2px] rounded-2xl px-4 py-1 sp:text-[10px] sp:py-1 sp:px-3 sn:text-[9px] sn:py-0.5 sn:px-1 si:text-[15px] si:py-2 si:px-4">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorView;
