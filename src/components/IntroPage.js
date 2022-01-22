import React from "react";
import image1 from "./images/Icon.png";
import image2 from "./images/Comp.png";
import image3 from "./images/proffesionals.png";
import image4 from "./images/interview.png";
import image5 from "./images/footer.png";

const Header = () => {
  return (
    <div className="body">
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div>
          <div class="navbar">
            <a class="active" href="#">
              <i class="fa fa-fw fa-home"></i> Home
            </a>
            <a href="https://github.com/Luffy-Nikhil/resume-builder-web-app">
              <i class="fa fa-fw fa-code" />
              Code
            </a>

            <a href="#">
              <i class="fa fa-fw fa-envelope"></i> Contact
            </a>
            <a href="#">
              <i class="fa fa-fw fa-newspaper-o "></i> Templates
            </a>
          </div>
        </div>

        <div>
          <div>
            <img className="Icon-allign" src={image1} width="400" alt="icon" />
          </div>
        </div>
      </div>

      <div className="Times-font">
        <h1 className="Welcome-head padding ">
          <b>Resume Builder</b>
        </h1>

        <div>
          <div className="gapsDiv ">
            <button
              className=" submit-button btn-primary buildResumeButton Position-Static "
              onClick={(event) => (window.location.href = "/build")}
            >
              <b>Build Resume</b>
            </button>
          </div>

          <div className="gapsDiv">
            <img src={image2} alt="decorative " />
          </div>

          <div>
            <h1>
              <b>
                A Free, Quick and Easy Way to Create Your Professional Resume.
              </b>
            </h1>
            <p>
              <p>Chose and Design Templates </p>
            </p>
          </div>

          <div className="gapsDiv">
            <img src={image3} alt="office" />
          </div>

          <div>
            <h1>
              <b>Resume Examples</b>
            </h1>
            <p>
              <p>Examples with pic</p>
            </p>
          </div>
          <div className="gapsDiv">
            <img src={image4} alt="interview-ace " />
          </div>
        </div>
      </div>

      <div className="footer">
        <img src={image5} width="300" alt="footer" />
      </div>
    </div>
  );
};
export default Header;
