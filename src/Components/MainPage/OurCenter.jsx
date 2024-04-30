import React from "react";
import sn1 from "../../../public/img/gurugram.jpeg";
import sn2 from "../../../public/img/delhi.jpeg";
import sn3 from "../../../public/img/spain.jpeg";
import sn4 from "../../../public/img/mzn.jpeg";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastIcon from "@mui/icons-material/East";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./OurCentre.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const OurCenter = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div
          className="border-start border-5 border-primary ps-5 mb-5"
          style={{ maxWidth: 600 + "px" }}
        >
          <h6 className="text-primary text-uppercase">Our Center</h6>
          <h1 className="display-5 text-uppercase mb-0">our Centeres</h1>
        </div>

        <Swiper
          spaceBetween={30}
          breakpoints={{
            700: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1000: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          loop
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          grabCursor={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={sn1} style={{ height: "350px", marginBottom:"10px" }} />
            <div className="col-12 h-100 d-flex flex-column">
              <div className="p-4">
                <h2 className="text-uppercase mb-3">GuruGram</h2>
                <p style={{ textAlign: "left", marginBottom:"30px" }}>
                  An Integrated Program to Groom Professional Players of the
                  Future. Our Residential Tennis Academy at Vedas International
                  School, Gurugram is our high performance tennis centre.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sn2} style={{ height: "350px", marginBottom:"10px" }} />
            <div className="col-12 h-100 d-flex flex-column">
              <div className="p-4">
                <h2 className="text-uppercase mb-3">Delhi</h2>
                <p style={{ textAlign: "left", marginBottom:"30px" }}>
                  This academy aims to catch talented individuals at a young age
                  & nurture them to become professional tennis players by
                  providing the right facilities, and training & recovery
                  measures.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sn3} style={{ height: "350px", marginBottom:"10px" }} />
            <div className="col-12 h-100 d-flex flex-column">
              <div className="p-4">
                <h2 className="text-uppercase mb-3">Spain</h2>
                <p style={{ textAlign: "left", marginBottom:"30px" }}>
                  Located in Alicante, a nice town by the beach, our tennis
                  academy is the perfect setting to improve your game through
                  our personalized programs all year round.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sn4} style={{ height: "350px", marginBottom:"10px" }} />
            <div className="col-12 h-100 d-flex flex-column">
              <div className="p-4">
                <h2 className="text-uppercase mb-3">Muzzafanagar</h2>
                <p style={{ textAlign: "left", marginBottom:"30px" }}>
                  Promoting the game at the grassroots levels, with this academy
                  we create awareness & knowledge & provide an experience of
                  this amazing sport.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <div className="slider-controler-startups">
            <div className="swiper-button-prev slider-arrow-startups">
              <WestOutlinedIcon
                color="white"
                style={{ color: "white" }}
                sx={{ fontSize: 10 }}
              />
            </div>
            <div className="swiper-button-next slider-arrow-startups">
              <EastIcon
                color="white"
                style={{ color: "white" }}
                sx={{ fontSize: 10 }}
              />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default OurCenter;
