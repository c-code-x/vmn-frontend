import linkedin from "../assets/linkedin.png";
import { Details } from "@/app/mentors/page";
import Image from "next/image";

const MentorCard = ({ details }: any) => {
  return (
    <div
      className="flex flex-row w-[400px] h-[170px] rounded-lg shadow-xl shadow-slate-400
                    sp:w-[90vw] sp:h-[150px]  sn:w-[87vw] sn:h-[20vh] se:w-[90vw] se:h-[170px] si:w-[45vw] si:h-[18vh] sr:w-[45vw] sr:h-[16vh] ">
      <div className="rounded-tl-lg rounded-bl-lg w-[150px] h-[175px]  sp:h-[150px] ">
        <div className="w-full h-full object-contain">
          <Image
            width={150}
            height={170}
            src={details.img}
            alt="Profile"
            className="w-[150px] h-[170px] sp:w-[150px] sp:h-[150px] sn:w-[95px] sn:h-[20vh] se:h-[170px]  si:h-[18vh] sr:h-[16vh] rounded-tl-lg rounded-bl-lg "
          />
        </div>
      </div>
      <div className="flex-col flex p-2">
        <h1 className="font-semibold text-[14px] sp:text-[13px] sn:text-[12px] si:text-[15px] sr:text-[19px] ">
          {details.name}
        </h1>
        <h1 className="font-semibold text-[11px] sp:text-[10px] sn:text-[9px] si:text-[13px]  sr:text-[15px]">
          {details.designation}
        </h1>
        <p className="text-[11px] sp:text-[10px] sn:text-[9px] si:text-[13px]  sr:text-[15px] ">
          Expertise in {details.expertise}
        </p>
        <p className="text-[11px] sp:text-[10px] sn:text-[9px] si:text-[13px]  sr:text-[15px]">
          Focused in {details.focus}
        </p>
        <p className="text-[11px] sp:text-[10px] sn:text-[9px] si:text-[13px]  sr:text-[15px]">
          Experienced in mentoring startups {details.mentoring_exp}
        </p>
        <div className="flex flex-row font-semibold mt-2 gap-2 sp:gap-1">
          <button className=" text-white bg-[#981F2B] rounded-2xl px-4 py-1 sp:text-[11px] sp:py-1 sp:px-3 sn:text-[9px] sn:py-0.5 sn:px-1 si:text-[15px] si:py-2 si:px-4 sr:text-[16px] sr:py-3 sr:px-6 se:text-[14px] se:py-2 se:px-4">
            Connect
          </button>
          <button className="text-[#981F2B] border-[#981F2B] border-[2px] rounded-2xl px-4 py-1 sp:text-[10px] sp:py-1 sp:px-3 sn:text-[9px] sn:py-0.5 sn:px-1 si:text-[15px] si:py-2 si:px-4 se:text-[14px] se:py-2 se:px-4">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
