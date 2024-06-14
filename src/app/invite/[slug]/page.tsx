
"use client"
import React, { useEffect } from "react";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";
const Invite = ({params}:{params: {slug:string}}) =>{
    const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phno, setPhno] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userdata, setUserdata] = useState(null);
  useEffect(() => {
      axios.get(`http://localhost:8080/api/invite/verifyInvite/${params.slug}`, {
        
      }).then((res) => {
          console.log(res);
          const data= res.data.data;
          setUserdata(data);
          setValid(true);
          console.log(data);
      }).catch((err) => {
          console.log(err);
      });
  },[]);
  const handelsubmit = async (e: any) => {
    console.log(role);
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8080/api/invite/acceptInvitation/${params.slug}`,
        {
          name: userdata?.name,
          emailId: userdata?.receiverMailId,
          password: password,
          contact: phno,
          linkedIn: linkedIn,
          designation: userdata?.toRole,
        }
      );
      console.log(response)
      
    } catch (error) {
      console.log(error);
    }
  }
    
    return(
       <>
       {valid ? <>
        <div className="flex justify-center items-center h-screen w-screen bg-[#EEEEEE]">
        <div className="mt-[100px]"> 
          <div className="flex flex-col bg-white  border-4 border-[#981F2B] sn:px-[5px]">
            <div className=" text-center flex item-center justify-center relative -top-8 sp:-top-6 se:-top-6  ">
              <h1 className="text-[#FFFFFF] p-2 font-bold text-[32px] bg-[#981F2B] rounded-lg sn:text-[20px] sp:text-[20px] se:text-[20px]">
                JOIN US
              </h1>
            </div>
           <form onSubmit={handelsubmit} className="" >
              <div className="flex flex-row sp:flex-col sn:flex-col se:flex-col space-x-12 sp:space-x-0 se:space-x-0 sn:space-x-0  p-5" >
                <div className="flex flex-col  space-y-12 sn:space-y-3 sp:space-y-4 p-5 sp:p-0 sp:px-4 sn:px-2 sn:px-4 sn:p-0 se:p-0 se:px-4 se:space-y-4">
                  <div>
                    <input
                      
                      
                     readOnly
                      type="text"
                      className=" shadow-lg shadow-indigo-500/40  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-[#EEEEEE] rounded-[12px] h-[45px] p-5 sp:p-2 sp:h-[30px] sp:w-[200px] se:p-3 se:h-[40px] se:w-[280px] sn:h-[20px] focus:bg-white sn:w-[230px]"
                      id="name"
                      placeholder={userdata?.name}
                      required
                    />
                    <br />
                  </div>
                  <div>
                    <input
                    
                      readOnly
                      type="email"
                      className=" shadow-lg shadow-indigo-500/40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-[#EEEEEE] rounded-[12px] h-[45px] p-5 sp:p-2 sp:h-[30px] sp:w-[200px] se:p-3 se:h-[40px] se:w-[280px] sn:h-[20px] focus:bg-white sn:w-[230px]"
                      id="MAIL ID"
                      placeholder={userdata?.receiverMailId}
                      required
                    />
                    <br />
                  </div>
                  <div>
                    <input
                    value={phno}
                    onChange={(e) => setPhno(e.target.value)}
                      
                      type="tel"
                      className="shadow-lg shadow-indigo-500/40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-[#EEEEEE] rounded-[12px] h-[45px] p-5 sp:p-2 sp:h-[30px] sp:w-[200px] se:p-3 se:h-[40px] se:w-[280px] sn:h-[20px] focus:bg-white sn:w-[230px]"
                      id="MOBILE NUMBER"
                      placeholder="MOBILE NUMBER"
                      
                      required
                    />
                    <br />
                  </div>
                </div>
                <div className="flex flex-col  space-y-12 sn:space-y-3 sp:space-y-4 p-5 sp:p-0 sp:px-4 sn:px-2 sn:px-4 sn:p-0 se:p-0 se:px-4 se:space-y-4">
                
                <div>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                     
                      type="text"
                      className=" shadow-lg shadow-indigo-500/40  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-[#EEEEEE] rounded-[12px] h-[45px] p-5 sp:p-2 sp:h-[30px] sp:w-[200px] se:p-3 se:h-[40px] se:w-[280px] sn:h-[20px] focus:bg-white sn:w-[230px]"
                      id="password"
                      placeholder="PASS WORD"
                      required
                    />
                    <br />
                  </div>
                  <div>
                    <input
                     
                     
                      type="text"
                      className=" shadow-lg shadow-indigo-500/40  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-[#EEEEEE] rounded-[12px] h-[45px] p-5 sp:p-2 sp:h-[30px] sp:w-[200px] se:p-3 se:h-[40px] se:w-[280px] sn:h-[20px] focus:bg-white sn:w-[230px]"
                      id="name"
                      placeholder={userdata?.toRole}
                      
                    />
                    <br />
                  </div>
                  <div>
                    <input
                      value={linkedIn}
                      onChange={(e) => setLinkedIn(e.target.value)}
                     
                      type="text"
                      className=" shadow-lg shadow-indigo-500/40  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-[#EEEEEE] rounded-[12px] h-[45px] p-5 sp:p-2 sp:h-[30px] sp:w-[200px] se:p-3 se:h-[40px] se:w-[280px] sn:h-[20px] focus:bg-white sn:w-[230px]"
                      id="name"
                      placeholder="LINKEDIN URL"
                      required
                    />
                    <br />
                  </div>
                  
                
                  
                </div>
              </div>
              <div className="flex justify-center  p-5">
              <button  type="submit"  className="text-white bg-[#981F2B]   rounded text-lg px-5 py-2.5 text-center mr-2  inline-flex items-center">
                

                  SUBMIT
              </button>
            </div>
          </form>
        
          </div>
        </div>
      </div>

       </> : <div className="mt-[100px]">
       <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
          <p className="font-bold">ERROR OCCURED</p>
            <p>Invalid user .</p>
          </div>
        </div>}
       
    
       </>
    )
}
export default Invite;