"use client"
import React,{useState} from "react";
import CouchViwe from "@/components/CouchViwe";
import CouchInvite from "@/components/CouchInvite";
const Couches =() =>{
    const [option,setOption] = useState('view')
    const selectOption =(opt : string) => {
        setOption(opt)
    }
    return(
        <div className="mt-[65px] bg-[#F0F0F6]  h-screen ">
            <div className=" flex flex-row ">
                <div className={` p-3 font-bold ${option === 'view' ? 'bg-[#FFFFFF]' : 'bg-[#EEEEEE]'}`} onClick={()=>selectOption('view')}>
                    <p>VIEW</p>
                </div>
                <div className={` font-bold  p-3 ${option === 'invite' ? 'bg-[#FFFFFF]' : 'bg-[#EEEEEE]'}`} onClick={()=>selectOption('invite')}>
                    <p>INVITE</p>
                </div>
            </div>
            <div className=" mx-20 my-12 sp:mx-3 sp:my-5 se:mx-8 ">
                {option === 'view' && <CouchViwe />}
                {option === 'invite' && <CouchInvite />}
                
            </div>
            
        </div>
    )
}
export default Couches;