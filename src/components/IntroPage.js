import React from "react";
import ReactRoundedImage from "react-rounded-image";
import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.jpeg";
import image3 from "./images/image3.jpeg";

const Header = () => {
  return (
    <div>
      <h1
        style={{
          color: "blue",
          backgroundColor: "Black",
          fontSize: 22,
          padding: "0.5em 1em",
        }}
      >
        <b>Resume_Builder</b>
        <ReactRoundedImage
          image={image1}
          roundedColor="#321124"
          imageWidth="150"
          imageHeight="150"
          roundedSize="13"
          hoverColor="#DD1144"
        />
        <a href="https://github.com/Luffy-Nikhil/resume-builder-web-app">
          <button className="codeButton" type="button">
            Code
          </button>
        </a>
      </h1>

      <div>
        <h1 style={{ fontSize: 80 }}>
          <b>Welcome to Our App!</b>
        </h1>

        <p>
          <b>A Quick and Easy Way to Create Your Professional Resume.</b>
        </p>

        <div className="gapsDiv">
          <button
            className=" submit-button btn-primary buildResumeButton"
            type="submit"
            align="bottom"
            onClick={(event) => (window.location.href = "/build")}
          >
            <b>Build Resume</b>
          </button>
          <div className="gapsDiv">
            <img src={image3} width="500" />
          </div>
          <div className="gapsDiv">
            <img src={image2} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
