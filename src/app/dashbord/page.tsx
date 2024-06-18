"use client";
import React, { useEffect, useState } from "react";
import Linkedinimg from "../../assets/linkedin.png";
import Profileimg from "../../assets/profile.png"
import edit from "../../assets/edit.png";
import Image from "next/image";
import { operationByRole } from "../../data/operation";
import ProfileEdit from "@/components/ProfileEdit";
import axios from "axios";
import Cookies from "js-cookie";
const Dashboard = () => {
  const [profileEdit, setProfileEdit] = useState(false);

  const [userdata, setUserdata] = useState({
    uid:"",
    name:"",
    emailId:"",
    role:"",
    password:"",
    contact:"",
    linkedIn:"",
    designation:"",
  }); 
  
  const data ={
    name:"FULL NAME",
    bio:"Would love to accept challenges to improve my professional and personal skills.",
    designation:"Designation - Department",
    campus:"Blr",
    email:"vdc@gitam.edu",
    phone:"9111111111"
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if(!token){
      window.location.href = '/login';
    }
    console.log(token);
    if (token) {
      axios.get("http://localhost:8080/api/user", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => {
        const data = res.data.data.userDAO;
        setUserdata(data);
      }).catch((err) => {
        console.log(err);
      })
    }
  }, []);

 

 
  const filteredOperations = operationByRole(userdata?.role || 'admin');
  return (
    <div className="relative bg-[#f0f0f6] h-screen overflow-y-scroll">
      {profileEdit && (
        <div className="fixed inset-0 z-40 bg-gray-900 opacity-50"></div>
      )}

      <div className="bg-[#f0f0f6] h-[100px]"></div>
      <div className="max-w-3xl mx-auto w-full bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-55 overflow-hidden bg-[#F0F0F0] border-4 border-[#981F2B]">
          <div className='flex flex-col m-5 text-[#981F2B]'>
            <h1 className='text-xl sn:text-xs font-bold flex justify-end'>WELCOME TO</h1>
            <p className='text-6xl sn:text-xl font-bold flex justify-end'>VMN</p>
            <p className='text-[12px] sn:text-[5px] font-bold flex justify-end'>#venturementornetwork</p>
          </div>
        </div>
        <div className="flex justify-end" onClick={() => setProfileEdit(true)}>
          <button>
            <Image
              alt="edit"
              className="w-auto h-[20px] m-4"
              src={edit}
            />
          </button>
          {profileEdit && (
            <ProfileEdit handleClose={() => setProfileEdit(false)} data={userdata} />
          )}
        </div>
        <div className="ml-10 w-40 h-40 sn:w-20 sn:h-20 flex relative bg-white rounded-full overflow-hidden" style={{ marginTop: "-140px" }}>
          <Image className="object-cover object-center h-40 sn:h-20" src={Profileimg} alt='IMAGE' />
        </div>
        <div className="mx-14 my-2">
          <p className="font-bold text-2xl sp:text-xl">{userdata.name}</p>
        </div>
        <div className="mt-2 flex flex-row sp:flex-col sp:gap-0 se:flex-col se:gap-0 sn:flex-col sn:gap-0 gap-10 mx-14">
          <div>
            <p className="text-slate-400 text-lg ">{data.bio}</p>
            <p className="text-lg">{userdata.designation}</p>
            <p className="text-lg">{data.campus}</p>
          </div>
          <div className=''>
            <p className="text-lg">{userdata.emailId}</p>
            <p className="text-lg">{userdata.contact}</p>
          </div>
        </div>
        <div className='m-3 flex justify-end'>
          <a href={userdata.linkedIn}>
            <Image
              alt="link"
              className="w-auto h-[25px]"
              src={Linkedinimg}
            />
          </a>
        </div>
        <div className="h-[5px]"></div>
      </div>
      <div className='my-14 flex justify-center'>
        <h1 className="text-black font-extrabold text-2xl">Operations</h1>
      </div>
      <div className='max-w-3xl mx-auto grid grid-cols-3 sp:mx-14 sp:grid-cols-2 se:mx-14 se:grid-cols-2  sn:grid-cols-1 sn:mx-14'>
        {filteredOperations.map((operation) => (
          <div key={operation.id}>
            <a href={operation.href}>
              <div className="bg-slate-100   flex-col flex w-max h-max py-[20px] px-[50px] rounded-lg bg- hover:bg-white">
                  <Image src={operation.src} alt="icon" width={50} height={50}/>
                  <p className="text-[#981F2B] font-bold ">{operation.feature}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
