import React from "react";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import DirectionsBikeOutlinedIcon from "@mui/icons-material/DirectionsBikeOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import ServicesList from "./ServicesList";

const List = [
  {
    heading: "Tennis Coaching for all",
    icon: (
      <SportsBasketballOutlinedIcon
        style={{ color: "#47AEFF" }}
        fontSize="large"
      />
    ),
  },
  {
    heading: "Global admission for Student-Athelete",
    icon: <SchoolOutlinedIcon style={{ color: "black" }} fontSize="large" />,
  },
  {
    heading: "Athletic & Academic Scholarships",
    icon: (
      <DirectionsBikeOutlinedIcon
        style={{ color: "#E80368" }}
        fontSize="large"
      />
    ),
  },
  {
    heading: "Helping Players & Coaches with Jobs",
    icon: (
      <ApartmentOutlinedIcon style={{ color: "#47AEFF" }} fontSize="large" />
    ),
  },
  {
    heading: "Tennis Academies Worldwide",
    icon: <SportsTennisIcon style={{ color: "red" }} fontSize="large" />,
  },
  {
    heading: "Academies in India",
    icon: (
      <MilitaryTechOutlinedIcon style={{ color: "#FFBB2C" }} fontSize="large" />
    ),
  },
  {
    heading: "League Matches (Clubs) in Europe",
    icon: (
      <EmojiEventsOutlinedIcon style={{ color: "#FFBB2C" }} fontSize="large" />
    ),
  },
  {
    heading: "Student-specific Solutions as per needs",
    icon: <ArticleOutlinedIcon style={{ color: "black" }} fontSize="large" />,
  },
];

const V6services = () => {
  return (
    <div className="row g-5">
      {List.map((e) => (
        <ServicesList heading={e.heading} icon={e.icon} />
      ))}
    </div>
  );
};

export default V6services;
