"use client";
import React, { useState,useEffect } from "react";
import InviteData from "../data/inviteData";
import axios from "axios";
import Cookies from "js-cookie";
import inviteData from "../data/inviteData";
export type data = {
    id:number,
    name:string,
    email:string,
    role:string,
    status:string
}
const CouchInvite = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [InviteData, setInviteData] = useState< data[] >([]);
    useEffect(() => {
        const token = Cookies.get("token");
        axios.get("http://localhost:8080/api/invite", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            const data= res.data.data;
            console.log(data);
            setInviteData(data);
            console.log(InviteData);
        }).catch((err) => {
            console.log(err);
        });
    }, []);
    const handleInvite: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        console.log(email + " " + name);
        try{
          const response = axios.post("http://localhost:8080/api/invite/new", {
            name: name,
            emailId: email,
            role: role,
          },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`
            }
          
          });
          console.log(response);
        }catch(error){
            console.log(error);
        }
      };
    return (
        <div>
            <div>
                <div className="flex justify-end">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-[20vw] sp:w-[40vw] sn:w-[40vw] se:w-[40vw] border-[3px] border-slate-400 focus:outline-none rounded-2xl py-1 px-3"
                    />
                </div>
                <div className="text-black phone:hidden mx-12 w-[80vw] h-[60vh] mt-5 overflow-x-auto">
                    <table className="w-full text-sm text-center">
                        <thead className='text-2xl bg-white rounded-xl sticky top-0'>
                            <tr>
                                <th className="px-4 py-4 rounded-s-xl">NAME</th>
                                <th className="px-4 py-2">EMAIL ID</th>
                                <th className="px-4 py-2">ROLE</th>
                                <th className="px-4 py-2 rounded-e-xl">STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {InviteData.map((data:any) => ([
                                <tr key={`${data.id}-spacer`} className='h-[30px]'>
                                    <td colSpan={4}></td>
                                </tr>,
                                <tr key={data.id} className="bg-white">
                                    <td className="px-4 py-5 rounded-s-xl">{data.name}</td>
                                    <td className="px-4 py-2">{data.receiverMailId}</td>
                                    <td className="px-4 py-2">{data.toRole}</td>
                                    <td className="px-4 py-2 rounded-e-xl">
                                        <p style={{ color: data.status === 'declined' ? 'red' : data.status === 'PENDING' ? '#fcba03' : 'green' }} >{data.status}</p>
                                    </td>
                                </tr>
                            ]))}
                        </tbody>
                    </table>
                </div>
                <div className="laptop:hidden tablet:hidden mt-5 w-full sp:p-5 se:p-3 h-[55vh] se:h-[55vh] space-y-5 overflow-x-auto  bg-white">
                    {InviteData.map((data:any) => ([
                        <div className="flex flex-row gap-12  sn:gap-0  se:flex se:justify-left se:w-[80vw] bg-[#f3f4f6] rounded-2xl " >
                        <div className="p-5">
                            <p>NAME</p>
                            <p>EMAIL</p>
                            <p>ROLE</p>
                            <p>STATUES</p>
                        </div>
                        <div className="p-5">
                            <p>{data.name}</p>
                            <p>{data.email}</p>
                            <p>{data.role}</p>
                            <p style={{ color: data.status === 'declined' ? 'red' : data.status === 'pending' ? 'yellow' : 'green' }}>{data.status}</p>
                        </div>
                    </div>
                    ]))
                    }
                </div>
            </div>
            <div className="my-5 mx-12 sp:-mx-1 se:mx-4  sn:mx-2">
                <form className="flex flex-row space-x-20 sp:space-x-5 se:space-x-4 sn:space-x-1" onSubmit={handleInvite}>
                    <div>
                        <input
                        type="name"
                        onChange={(e) => setName(e.target.value)}
                        className=" bg-[#ffffff] border border-gray-400 rounded-[12px] h-[45px] p-5 sp:p-2 sp:h-[30px] si:w-[90px] sr:w-[100px] sp:w-[60px] se:p-3 sp:h-[40px] se:h-[40px] se:w-[70px] sn:h-[20px] focus:bg-white sn:w-[60px]"
                        id="name"
                        placeholder="Name"
                        required
                        />
                        <br />
                    </div>
                    <div>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className=" bg-[#ffffff] border border-gray-400 rounded-[12px] h-[45px] p-5 sp:p-2 sp:h-[30px] si:w-[90px] sr:w-[100px] sp:w-[60px] se:p-3 sp:h-[40px] se:h-[40px] se:w-[70px] sn:h-[20px] focus:bg-white sn:w-[60px]"
                            id="email"
                            placeholder="Email"
                            required
                        />
                        <br />
                    </div>
                    <div>
                        <input
                            type="role"
                            onChange={(e) => setRole(e.target.value)}
                            className=" bg-[#ffffff] border border-gray-400 rounded-[12px] h-[45px] p-5 sp:p-2 sp:h-[30px] si:w-[90px] sr:w-[100px] sp:w-[60px] se:p-3 sp:h-[40px] se:h-[40px] se:w-[70px] sn:h-[20px] focus:bg-white sn:w-[60px]"
                            id="role"
                            placeholder="Role"
                            required
                        />
                        <br />
                    </div>
                    <div className=" ">
                        <button
                            type="submit"
                            className="bg-[#981F2B] w-full text-white font-semibold  sp:h-[40px] se:h-[40px]  px-5 py-3 rounded-[16px] sn:w-[60px]">
                                Invite
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default CouchInvite;
