import React from "react";
import { Link } from "react-router-dom";
import sn1 from "../../../public/img/gurugram.jpeg";
import sn2 from "../../../public/img/delhi.jpg";
import sn3 from "../../../public/img/spain.jpeg";
import sn4 from "../../../public/img/mzn.jpeg";
import campus1 from "../../../public/img/campus1.jpg";
import campus3 from "../../../public/img/campus3.jpg";

const EnquireNowPage = () => {
  return (
    <div className="pt-5">
      <div className="container-fluid py-5 pt-5">
        <div className="container">
          <div
            className="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxWidth: 600 + "px" }}
          >
            <h6 className="text-primary text-uppercase">Enquire Now</h6>
            <h1 className="display-5 text-uppercase mb-0">Our Packages</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4" style={{ textAlign: "center" }}>
              <Link to={"/EnquireNow/GuruGram"}>
                <img
                  src={sn1}
                  style={{
                    objectFit: "cover",

                    width: "100%",
                    height: "300px",
                  }}
                />
              </Link>
              <h3 style={{ marginTop: "20px", fontSize: "30px" }}>GuruGram</h3>
            </div>
            <div className="col-lg-4" style={{ textAlign: "center" }}>
              <Link to={"/EnquireNow/Delhi"}>
                <img
                  src={sn2}
                  style={{
                    objectFit: "cover",

                    width: "100%",
                    height: "300px",
                  }}
                />
              </Link>
              <h3 style={{ marginTop: "20px", fontSize: "30px" }}>Delhi</h3>
            </div>
            <div className="col-lg-4" style={{ textAlign: "center" }}>
              <Link to={"/EnquireNow/Spain"}>
                <img
                  src={sn3}
                  style={{
                    objectFit: "cover",

                    width: "100%",
                    height: "300px",
                  }}
                />
              </Link>
              <h3 style={{ marginTop: "20px", fontSize: "30px" }}>Spain</h3>
            </div>
            <div className="col-lg-4" style={{ textAlign: "center" }}>
              <Link to={"/EnquireNow/Muzaffarnagar"}>
                <img
                  src={sn4}
                  style={{
                    objectFit: "cover",

                    width: "100%",
                    height: "300px",
                  }}
                />
              </Link>
              <h3 style={{ marginTop: "20px", fontSize: "30px" }}>
                Muzaffarnagar
              </h3>
            </div>
            <div className="col-lg-4" style={{ textAlign: "center" }}>
              <Link to={"/EnquireNow/Belagavi"}>
                <img
                  src={campus1}
                  style={{
                    objectFit: "cover",

                    width: "100%",
                    height: "300px",
                  }}
                />
              </Link>
              <h3 style={{ marginTop: "20px", fontSize: "30px" }}>Belagavi</h3>
            </div>
            <div className="col-lg-4" style={{ textAlign: "center" }}>
              <Link to={"/EnquireNow/Mumbai"}>
                <img
                  src={campus3}
                  style={{
                    objectFit: "cover",

                    width: "100%",
                    height: "300px",
                  }}
                />
              </Link>
              <h3 style={{ marginTop: "20px", fontSize: "30px" }}>Mumbai</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquireNowPage;
