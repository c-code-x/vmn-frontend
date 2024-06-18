import Coachimg from "../assets/coach.png";
import Mentorimg from "../assets/mentor (1).png";
import VentureImg from "../assets/venture.png";
import Responseimg from "../assets/response.png";

const operations = [
  {
    id: 1,
    feature: "Coaches",
    src: Coachimg,
    href: "/dashbord/couches",
  },
  {
    id: 2,
    feature: "Mentor",
    src: Mentorimg,
    href: "/dashbord/mentors",
  },
  {
    id: 3,
    feature: "Venture",
    src: VentureImg,
    href: "/dashbord/venture",
  },
  {
    id: 4,
    feature: "Responses",
    src: Responseimg,
    href: "/dashbord/responces",
  },
];

const operationByRole = (role) => {
  const allowedFeatures = {
    ADMIN: ["Coaches", "Mentor", "Venture", "Responses"],
    COACH: ["Venture"],
    MENTOR: ["Coaches", "Venture"],
  };

  const allowedOperations = allowedFeatures[role];

  if (allowedOperations) {
    return operations.filter((operation) =>
      allowedOperations.includes(operation.feature)
    );
  } else {
    
    return []; 
  }
};

export { operations, operationByRole };
