"use client";
import { link } from "fs";
import React, { useState } from "react";

const ProfileEdit = ({handleClose,data }:any) => {
    const [name, setName] = useState(data.name);
    const [password, setPassword] = useState('');
    const [designation, setDesignation] = useState(data.designation);
    const [role, setRole] = useState(data.role);
    const [phone, setPhone] = useState(data.phone);
    const [email, setEmail] = useState(data.email);
    const [linkedin,setLinkedin] = useState(data.linkedin);
    const handleSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault();
      //try{
        //const response = axios.post("http://localhost:5000/signup", {
          //email: email,
      //    name: name,
        //  phone: phone,
       //   designation: designation,
        //  bio:bio,
        // campus:campus
    //},{
     // headers: {
      //  'Authorization': `Bearer ${localStorage.getItem('token')}`
      //},
    //}
       // });
  
      //}catch(error){
       // if(error.response.status===403){
         // setError("user already exist");
        //}
        //else{
        //  setError("data sent sucessfully");
      //}
      console.log("name");
      handleClose();
    };
    console.log(data);
  

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white  p-4 mx-4 max-w-sm sp:max-w-[80vw] md:max-w-md lg:max-w-lg rounded-md relative z-50 overflow-x-auto sp:overflow-x-hidden se:overflow-x-hidden sr:overflow-x-hidden si:overflow-x-hidden">
        <h3 className="text-lg font-semibold mb-4 flex justify-center">Edit profile</h3>
        <div className="flex flex-row  gap-5 sp:gap-2">
          <div className="space-y-4 sp:space-y-0 se:space-y-4">
            <p className="text-xl p-2">Name</p>
            <p className="text-xl p-2">Designation</p>
            <p className="text-xl p-2">Linkedin</p>
            <p className="text-xl p-2">Mobile</p>
            <p className="text-xl p-2">Email</p>
            <p className="text-xl p-2">Password</p>
            <p className="text-xl p-2">Role</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 se:space-y-5 ">
              <input
                type="text"
                value={data.name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#ffffff] border border-gray-400 rounded-[12px] h-[45px] p-2 sp:p-2 sp:h-[30px] sp:w-[130px] se:p-3 se:h-[40px] se:w-[200px] sn:h-[20px] focus:bg-white sn:w-[230px]"
                id="name"
            
              />
              <input
                type="text"
                value={data.designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="bg-[#ffffff] border border-gray-400 rounded-[12px] h-[45px] p-2 sp:p-2 sp:h-[30px] sp:w-[130px] se:p-3 se:h-[40px] se:w-[200px] sn:h-[20px] focus:bg-white sn:w-[230px]"
                id="bio"
              />
              <input
                type="text"
                value={data.linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                className="bg-[#ffffff] border border-gray-400 rounded-[12px] h-[45px] p-2 sp:p-2 sp:h-[30px] sp:w-[130px] se:p-3 se:h-[40px] se:w-[200px] sn:h-[20px] focus:bg-white sn:w-[230px]"
                id="designation"
              />
              
              <input
                type="tel"
                value={data.contact}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-[#ffffff] border border-gray-400 rounded-[12px] h-[45px] p-2 sp:p-2 sp:h-[30px] sp:w-[130px] se:p-3 se:h-[40px] se:w-[200px] sn:h-[20px] focus:bg-white sn:w-[230px]"
                id="phone"
              />
              <input
                type="email"
                value={data.emailId}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#ffffff] border border-gray-400 rounded-[12px] h-[45px] p-2 sp:p-2 sp:h-[30px] sp:w-[130px] se:p-3 se:h-[40px] se:w-[200px] sn:h-[20px] focus:bg-white sn:w-[230px]"
                id="email"
              />
              <input
                type="text"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#ffffff] border border-gray-400 rounded-[12px] h-[45px] p-2 sp:p-2 sp:h-[30px] sp:w-[130px] se:p-3 se:h-[40px] se:w-[200px] sn:h-[20px] focus:bg-white sn:w-[230px]"
                id="email"
              />
              <input
                type="text"
                value={data.role}
                onChange={(e) => setRole(e.target.value)}
                className="bg-[#ffffff] border border-gray-400 rounded-[12px] h-[45px] p-2 sp:p-2 sp:h-[30px] sp:w-[130px] se:p-3 se:h-[40px] se:w-[200px] sn:h-[20px] focus:bg-white sn:w-[230px]"
                id="email"
              />
            </div>
            <div>
              <div className="flex mt-5 sp:-mx-12 se:-mx-10 sr:-mx-10 si:-mx-10 sp:space-x-5 space-x-10">
                <button
                  type="submit"
                  className="bg-[#981F2B] w-[5vw] si:w-[10vw] sr:w-[10vw] sp:w-[20vw] se:w-[20vw] text-white font-semibold py-[10px] rounded-[16px]"
                >
                  Submit
                </button>
                <button
                  onClick={handleClose}
                  className="bg-[#981F2B] w-[5vw] si:w-[10vw] sr:w-[10vw] sp:w-[20vw] se:w-[20vw] text-white font-semibold py-[10px] rounded-[16px]"
                >
                  Discard
                </button>
              </div>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default ProfileEdit;
