import React from "react";
import "./CountryService.css";

const CountryService = ({ direction, serviceHeading, bgcolor, serviceIMG }) => {
  let path = 2;

  return (
    <>
      <div className={`container-fluid ${direction  == 2? "vivek" : ""}`}>
        <div
          className={`container service-container ${
            direction == 2 ? "reverse" : " "
          }`}
          // style={{ backgroundColor: `${bgcolor}` }}
        >
          <div className="services-text">
            <div className="border-start border-5 border-primary ps-5 mb-3">
              {/* <h6 className="text-primary text-uppercase">About Us</h6> */}
              <h1 className="display-5 text-uppercase mb-0">
                {serviceHeading}
              </h1>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              ratione officiis ducimus. Corrupti natus, rerum expedita
              consequuntur dolorem, explicabo corporis, ad ratione vel
              doloremque perspiciatis neque obcaecati id voluptates excepturi
              nesciunt aspernatur at eveniet? Quam, dicta inventore? Nam, totam
              ipsa aperiam, sed sequi hic magnam ut iusto veritatis
              exercitationem aut?
            </p>
            <h2>Features</h2>
            <ul>
              <li>
                Lorem ipsum dolor, sit amet consecr adipisicing
                elit. Volupt, cupiditate Lorem ipsum dolor, sit amet consecr
              </li>
              <li>
                Lorem ipsum dolor, sit amet consecr adipisicing
                elit. Volupt, cupiditate Lorem ipsum dolor, sit amet consecr
              </li>
              <li>
                Lorem ipsum dolor, sit amet consecr adipisicing
                elit. Volupt, cupiditate Lorem ipsum dolor, sit amet consecr
              </li>
              <li>
                Lorem ipsum dolor, sit amet consecr adipisicing
                elit. Volupt, cupiditate Lorem ipsum dolor, sit amet consecr
              </li>

            </ul>
          </div>
          <div className="service-img">
            <img src={serviceIMG} />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default CountryService;
