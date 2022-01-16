import React from "react";
import ReactRoundedImage from "react-rounded-image";
import image1 from "./images/image1.jpeg";

const Heading = () => {
  return (
    <div>
      <h1 style={{ color: "blue", fontSize: 22, padding: "0.5em 1em" }}>
        <b>Resume_Builder</b>
        <ReactRoundedImage
          image={image1}
          roundedColor="#321124"
          imageWidth="150"
          imageHeight="150"
          roundedSize="13"
          hoverColor="#DD1144"
        />
      </h1>
      <div>
        <h2>Welcome to Our App!</h2>
        <div>
          <button className="btn btn-primary ml-0" type="submit">
            Build Resume
          </button>
        </div>
      </div>
    </div>
  );
};
export default Heading;
