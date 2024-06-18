"use client"
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
  const [name, setName] = useState("");
  const [phno, setPhno] = useState("");
  const [designation, setDesignation] = useState("");
  const [intrest, setIntrest] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
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

 

  const handleSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    //try{
      //const response = axios.post("http://localhost:5000/signup", {
        //email: email,
    //    name: name,
      //  phno: phno,
     //   designation: designation,
      //  intrest: intrest,
     // });

    //}catch(error){
     // if(error.response.status===403){
       // setError("user already exist");
      //}
      //else{
      //  setError("data sent sucessfully");
    //}
    console.log("name");
    setLoading(true);
    setError("Backend Not Connected");
    notify_failure();
  };

  

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen bg-[#EEEEEE]">
        <div className="mt-[100px]"> 
          <div className="flex flex-col bg-white  border-4 border-[#981F2B] sn:px-[5px]">
            <div className=" text-center flex item-center justify-center relative -top-8 sp:-top-6 se:-top-6  ">
              <h1 className="text-[#FFFFFF] p-2 font-bold text-[32px] bg-[#981F2B] rounded-lg sn:text-[20px] sp:text-[20px] se:text-[20px]">
                JOIN US
              </h1>
            </div>
           <form className="" onSubmit={handleSubmit}>
              <div className="flex flex-row sp:flex-col sn:flex-col se:flex-col space-x-12 sp:space-x-0 se:space-x-0 sn:space-x-0  p-5" >
                <div className="flex flex-col  space-y-12 sn:space-y-3 sp:space-y-4 p-5 sp:p-0 sp:px-4 sn:px-2 sn:px-4 sn:p-0 se:p-0 se:px-4 se:space-y-4">
                  <div>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className=" shadow-lg shadow-indigo-500/40  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-[#EEEEEE] rounded-[12px] h-[45px] p-5 sp:p-2 sp:h-[30px] sp:w-[200px] se:p-3 se:h-[40px] se:w-[280px] sn:h-[20px] focus:bg-white sn:w-[230px]"
                      id="name"
                      placeholder="FULL NAME"
                      required
                    />
                    <br />
                  </div>
                  <div>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className=" shadow-lg shadow-indigo-500/40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-[#EEEEEE] rounded-[12px] h-[45px] p-5 sp:p-2 sp:h-[30px] sp:w-[200px] se:p-3 se:h-[40px] se:w-[280px] sn:h-[20px] focus:bg-white sn:w-[230px]"
                      id="MAIL ID"
                      placeholder="MAIL ID"
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
                      autoComplete="new-password"
                      required
                    />
                    <br />
                  </div>
                </div>
                <div className="flex flex-col  space-y-5 sp:space-y-2 sn:space-y-2 p-5">
                  <div className=" space-x-3 ">
                    <p className="text-[#9ca3af]  shadow-lg shadow-indigo-500/40  bg-[#EEEEEE] rounded-[12px] h-[45px] p-3 sp:p-2 sp:h-[30px] sp:w-[200px] se:p-3 se:h-[40px] se:w-[280px] sn:h-[20px]  sn:w-[230px]">INTRESTED AS</p>
                    <br />
                    <input
                      type="radio"
                      id="mentor"
                      name="role"
                      value="mentor"
                      onChange={(e) => setDesignation(e.target.value)}
                      />
                     <label >MENTOR</label>
                     <input
                      type="radio"
                      id="mentor"
                      name="role"
                      value="mentor"
                      onChange={(e) => setDesignation(e.target.value)}
                      />
                     <label >MENTEE</label>
                  </div>
                  <div>
                    <textarea rows={5} className="shadow-lg shadow-indigo-500/40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 p-2.5 w-full text-sm text-gray-900 bg-[#EEEEEE] rounded-[12px] focus:bg-white" 
                    placeholder="DESCRIBE YOUR INTREST"
                    value={intrest}
                    onChange={(e) => setIntrest(e.target.value)}
                    />
                    <br />
                  </div>
                  
                </div>
              </div>
              <div className="flex justify-center  p-5">
              <button  type="submit"  className="text-white bg-[#981F2B]   rounded text-lg px-5 py-2.5 text-center mr-2  inline-flex items-center">
                {loading && (
                      <svg  role="status" className="inline mr-3 w-5 h-5 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                    </svg>
                )}

                  SUBMIT
              </button>
            </div>
          </form>
        
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
    </>
  );
};

export default SignUp;
