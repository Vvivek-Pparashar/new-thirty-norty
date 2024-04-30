import React from "react";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import OutlinedFlagOutlinedIcon from "@mui/icons-material/OutlinedFlagOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

import ServicesList from "../MainPage/ServicesList";

const List = [
  {
    heading: "Tennis Counselling",
    icon: (
      <SportsBasketballOutlinedIcon
        style={{ color: "#47AEFF" }}
        fontSize="large"
      />
    ),
  },
  {
    heading: "Athletic & Academic Scholarships",
    icon: <SchoolOutlinedIcon style={{ color: "black" }} fontSize="large" />,
  },
  {
    heading: "Tennis Academies Worldwide",
    icon: <PublicOutlinedIcon style={{ color: "green" }} fontSize="large" />,
  },
  {
    heading: "Academies in India",
    icon: (
      <OutlinedFlagOutlinedIcon style={{ color: "orange" }} fontSize="large" />
    ),
  },
  {
    heading: "Helping Players & Coaches with Jobs",
    icon: <WorkOutlineOutlinedIcon style={{ color: "red" }} fontSize="large" />,
  },
  {
    heading: "Admissions of Student-Athlete in Universities",
    icon: (
      <HistoryEduOutlinedIcon style={{ color: "black" }} fontSize="large" />
    ),
  },
  {
    heading: "League Matches (Clubs) in Europe",
    icon: (
      <MilitaryTechOutlinedIcon style={{ color: "#FFBB2C" }} fontSize="large" />
    ),
  },
  {
    heading: "Taylor-made Solutions as per Student-Player need",
    icon: <CreateOutlinedIcon style={{ color: "#E80368" }} fontSize="large" />,
  },
];

const Consultancy = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div
          className="border-start border-5 border-primary ps-5 mb-5"
          style={{ maxWidth: 600 + "px" }}
        >
          <h6 className="text-primary text-uppercase">Services</h6>
          <h1 className="display-5 text-uppercase mb-0">
            Our Excellent Tennis Consultancy
          </h1>
        </div>
        <div className="row g-5">
          {List.map((e) => (
            <ServicesList heading={e.heading} icon={e.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Consultancy;
