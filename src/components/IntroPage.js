import React from "react";
import image1 from "./images/icon.png";
import image2 from "./images/Comp.png";
import image3 from "./images/proffesionals.png";
import image4 from "./images/interview.png";
import image5 from "./images/footer.png";
import image6 from "./images/growth.png";
const Header = () => {
  return (
    <body className="BgColor">
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

        <div className="Icon-allign ">
          <img className="imageDiv" src={image1} alt="icon" />
        </div>
        <div className="White-font">
          <div>
            <h1 className="Welcome-head Times-font Clear-Head  ">
              <b>Star Resume</b>
            </h1>
          </div>
          <div className="ParaGraphs Times-font padding">
            <p>
              Bored of lame websites asking for money ...? Want something new?
              Try this....A Quick and Easy Way to Create Your Professional
              Resume. 30+ Professional Resume Templates Choose from over thirty
              modern and professional templates. All of which can be customized
              to your liking. Fast and Easy to Use Our resume builder lets you
              easily and quickly create a resume using our resume wizard.
            </p>
          </div>
        </div>
      </div>
      <div className="bg1 space">
        <div className="gapsDiv ">
          <img src={image2} alt="decorative " />
        </div>
        <div>
          <div className="gapsDiv bg2 space ">
            <button
              className=" submit-button btn-primary buildResumeButton Position-Static "
              onClick={(event) => (window.location.href = "/build")}
            >
              <b>Build Resume</b>
            </button>
          </div>

          <div className="ParaGraphs White-font">
            <h1>
              <b>
                A Free, Quick and Easy Way to Create Your Professional Resume.
              </b>
            </h1>
            <p>
              <p>
                Need help building your resume? By analyzing thousands of
                winning resumes, we were able to build guides to help you build
                the perfect resume for the job you want. We’re adding more and
                more examples and guides every week in order to have the most
                comprehensive directory of resume examples. Click below to check
                out some of our featured resume examples along with tips for
                making your resume stand out!{" "}
              </p>
            </p>
          </div>
        </div>
        <div className="gapsDiv">
          <img src={image3} alt="office" />
        </div>

        <div className="ParaGraphs White-font">
          <h1>
            <b>Resume Examples</b>
          </h1>
          <p>
            <p>
              Need help building your resume? By analyzing thousands of winning
              resumes, we were able to build guides to help you build the
              perfect resume for the job you want. We’re adding more and more
              examples and guides every week in order to have the most
              comprehensive directory of resume examples. Click below to check
              out some of our featured resume examples along with tips for
              making your resume stand out!{" "}
            </p>
          </p>
        </div>
        <div className="gapsDiv">
          <img src={image4} alt="interview-ace " />
        </div>
        <div className="ParaGraphs">
          <h1>
            <b>Let us be a part of Your Success!</b>
          </h1>

          <p>
            Need help building your resume? By analyzing thousands of winning
            resumes, we were able to build guides to help you build the perfect
            resume for the job you want. We’re adding more and more examples and
            guides every week in order to have the most comprehensive directory
            of resume examples. Click below to check out some of our featured
            resume examples along with tips for making your resume stand out!{" "}
          </p>
        </div>
        <div className="gapsDiv">
          <img src={image6} alt="decorative " />
        </div>
      </div>

      <div className="footer">
        <img src={image5} width="200" alt="footer" />
      </div>
    </body>
  );
};
export default Header;
