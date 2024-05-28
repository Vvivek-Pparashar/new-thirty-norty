import React from "react";
import { YouTubeEmbed } from "react-social-media-embed";

const Youtube = () => {
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxWidth: 600 + "px" }}
          >
            <h6 className="text-primary text-uppercase">Latest Blog</h6>
            <h1 className="display-5 text-uppercase mb-0">Youtube</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4">
              <YouTubeEmbed
                url="https://www.youtube.com/watch?v=HpVOs5imUN0"
                width={"100%"}
                height={250}
                // style={{ width: "100%", height:"250px" }}
              />
            </div>
            <div className="col-lg-4">
              <YouTubeEmbed
                url="https://www.youtube.com/watch?v=HpVOs5imUN0"
                width={"100%"}
                height={250}
                // style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-4">
              <YouTubeEmbed
                url="https://www.youtube.com/watch?v=HpVOs5imUN0"
                width={"100%"}
                height={250}
                // style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
