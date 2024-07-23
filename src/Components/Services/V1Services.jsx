import React from "react";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import DirectionsBikeOutlinedIcon from "@mui/icons-material/DirectionsBikeOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
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
    heading: "Sports Psychotherapy",
    icon: <FavoriteOutlinedIcon style={{ color: "red" }} fontSize="large" />,
  },
  {
    heading: "Sports Nutrition",
    icon: (
      <DirectionsBikeOutlinedIcon
        style={{ color: "#E80368" }}
        fontSize="large"
      />
    ),
  },
  {
    heading: "Tournament Schedule",
    icon: (
      <EmojiEventsOutlinedIcon style={{ color: "#FFBB2C" }} fontSize="large" />
    ),
  },
  {
    heading: "Athletic & Academic Scholarships",
    icon: <SchoolOutlinedIcon style={{ color: "black" }} fontSize="large" />,
  },
  {
    heading: "Club/League Matches Europe",
    icon: (
      <MilitaryTechOutlinedIcon style={{ color: "#FFBB2C" }} fontSize="large" />
    ),
  },
  {
    heading: "University/School Admissions Abroad",
    icon: (
      <ApartmentOutlinedIcon style={{ color: "#47AEFF" }} fontSize="large" />
    ),
  },
  {
    heading: "Free Professional Counselling",
    icon: <ArticleOutlinedIcon style={{ color: "black" }} fontSize="large" />,
  },
];

const V1Services = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div
          className="border-start border-5 border-primary ps-5 mb-lg-3 mb-5"
          style={{ maxWidth: 600 + "px" }}
        >
          <h6 className="text-primary text-uppercase">Why choose,</h6>
          <h1 className="display-5 text-uppercase mb-0">Thirty40</h1>
        </div>
        <div class="row g-lg-5 py-lg-5 ">
          <div class="col-lg-6" >
            <h1>We are based in</h1>
            <h3>India, Germany, Czech Republic, Spain, USA, Italy, Canada and France</h3>
          </div>
          <div class="col-lg-6 py-5 pt- pt-lg-0">
            <h5>
              Our Mission at Thirty40 is to enable every player to:

            </h5>
            <ul>
              <li><i class="ri-check-double-line"></i> Make the process of becoming a tennis professional easier and simpler.</li>
              <li><i class="ri-check-double-line"></i> Provide cost-effective ways for players to train abroad and play international tournaments and leagues. </li>
              <li><i class="ri-check-double-line"></i> Initially train the players at our academies in India and then send them abroad on scholarships and arrange sponsorships. </li>
              <li><i class="ri-check-double-line"></i> Players going to tennis academies can continue their education by studying on scholarships in public and private universities abroad. </li>
            </ul>

          </div>
        </div>
        <div
          className="border-start border-5 border-primary ps-5 mb-5"
          style={{ maxWidth: 600 + "px" }}
        >
          <h6 className="text-primary text-uppercase">Services</h6>
          <h1 className="display-5 text-uppercase mb-0">
            Our Excellent Tennis Services
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

export default V1Services;