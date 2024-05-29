import React from "react";
import sn1 from "../../../public/img/n1.jpeg";
import sn2 from "../../../public/img/n2.jpeg";
import sn3 from "../../../public/img/n3.jpeg";
import sn4 from "../../../public/img/n4.jpeg";
import sn5 from "../../../public/img/n5.jpeg";
import sn6 from "../../../public/img/n6.jpeg";
import sn7 from "../../../public/img/n7.jpeg";
import sn8 from "../../../public/img/n8.jpeg";
import sn9 from "../../../public/img/n9.jpeg";

import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastIcon from "@mui/icons-material/East";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./OurCenter.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const News = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div
          className="border-start border-5 border-primary ps-5 mb-5"
          style={{ maxWidth: 600 + "px" }}
        >
          <h6 className="text-primary text-uppercase">Our News</h6>
          <h1 className="display-5 text-uppercase mb-0">Latest News</h1>
        </div>

        <Swiper
          spaceBetween={30}
          breakpoints={{
            700: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
          loop
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="myswiper3"
          style={{height:"250px"}}
        >
          <SwiperSlide>
            <img src={sn1} style={{ height: "200px", marginBottom: "10px" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sn2} style={{ height: "200px", marginBottom: "10px" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sn3} style={{ height: "200px", marginBottom: "10px" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sn4} style={{ height: "200px", marginBottom: "10px" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sn5} style={{ height: "200px", marginBottom: "10px" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sn6} style={{ height: "200px", marginBottom: "10px" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sn7} style={{ height: "200px", marginBottom: "10px" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sn8} style={{ height: "200px", marginBottom: "10px" }} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default News;
