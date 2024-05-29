import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

const Instagram = () => {
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxWidth: 600 + "px" }}
          >
            <h6 className="text-primary text-uppercase">Instagram</h6>
            <h1 className="display-5 text-uppercase mb-0">Instagram Handles</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4">
              <InstagramEmbed
                url="https://www.instagram.com/_thirty40?igsh=am5sZGs1dWN4c2V5&utm_source=qr"
                width={"100%"}
                // height={"1000px"}
              />
            </div>
            <div className="col-lg-4">
              <InstagramEmbed
                url="https://www.instagram.com/arnaaav_/"
                width={"100%"}
              />
            </div>
            <div className="col-lg-4">
              <InstagramEmbed
                url="https://www.instagram.com/thirty40academies?igsh=MWU3Nmd4NnJreWJoMQ%3D%3D&utm_source=qr"
                width={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
