import wave from "../assets/wave.png";
import mentorData from "../../data/mentorData";
import MentorCard from "../../components/MentorCard";

export type Details =  {
    id: number,
    img: string,
    name: string,
    designation: string,
    expertise: string,
    focus: string,
    mentoring_exp: string
}

const MentorsPage = () => {
  return (
    <div className="flex flex-col font-sans  mt-[100px]">
      <div className="flex flex-col  mx-auto">
        <h1 className="text-[#492DD8] font-bold    text-3xl ">
          Meet our Mentors
        </h1>
        <div className=" mt-5 flex flex-wrap gap-5 text-slate-600">
          <input
            type="text"
            placeholder="Search"
            className="sp:w-[90vw] se:w-[90vw]  si:w-[40vw] sr:w-[50vw] sn:w-[90vw] border-[3px] border-slate-400 focus:outline-none rounded-2xl py-1 px-3"
          />
          <select
            name="Category"
            id="Category"
            className="bg-white border-[3px] border-slate-400 py-1 px-3 rounded-2xl se:w-[50vw]  si:w-[30vw] sn:w-[55vw]">
            <option value="All Categories" selected>
              All Categories (Default)
            </option>
            <option value="Buisiness Analyst">Buisiness Analyst</option>
            <option value="Go To Market">Go To Market</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <div className=" mx-auto grid lg:grid-cols-3 gap-4 my-10 md:grid-cols-2 grid-cols-1 ">
          {mentorData.map((details) => {
            return <MentorCard key={details.id} details={details} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MentorsPage;
