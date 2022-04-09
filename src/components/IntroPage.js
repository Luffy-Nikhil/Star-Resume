import React from "react";
import image1 from "./images/icon.png";
import image2 from "./images/Comp.png";
import image3 from "./images/proffesionals.png";
import image4 from "./images/interview.png";
import image5 from "./images/footer.png";
import image6 from "./images/growth.png";
import Logo from './images/LogoMakr-8IrTLl.png';

const Header = () => {
  return (
    <body className="BgColor">
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div className="flex flex-row grid grid-cols-2">
          <div className="flex flex-row">
            <div className="px-2 my-auto">
              <img src={Logo} alt="logo" style={{ width: '50px' }}></img>
            </div>
            <div className="text-xl flex flex-row pl-2 py-6 text-white text-3xl">
              Star Resume
            </div>
          </div>
          <div className="flex flex-row justify-end items-center text-white text-3xl list-none">
            <li className="px-4">
              <a class="active" href="#">
                <i class="fa fa-fw fa-home"></i>
                Home
              </a>
            </li>
            <li className="px-4">
              <a href="/about">
                About
              </a>
            </li>
            <li className="px-4">
              <a href="/build">
                Build
              </a>
            </li>
            <li className="px-4">
              <a href="/contact">
                <i class="fa fa-fw fa-envelope"></i> Contact
              </a>
            </li>
            <li className="px-4">
              <a href="https://github.com/Luffy-Nikhil/resume-builder-web-app">
                <i class="fa fa-fw fa-code" />
                Code
              </a>
            </li>
          </div>
        </div>

        <div className='Icon-allign'>
          <img className="mx-auto" src={image1} alt="icon" />
        </div>
        <div className="White-font">
          <div>
            <h1 className="Welcome-head Times-font Clear-Head  ">
              <b>Star Resume</b>
            </h1>
          </div>
          <div className="ParaGraphs Times-font padding">
            <p className="text-3xl">
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
        <div className="gapsDiv">
          <img className="mx-auto" src={image2} alt="decorative " />
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
              <b className="text-3xl">
                A Free, Quick and Easy Way to Create Your Professional Resume.
              </b>
            </h1>
            <p>
              <p className="text-2xl">
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
          <img className="mx-auto" src={image3} alt="office" />
        </div>

        <div className="ParaGraphs White-font">
          <h1>
            <b className="text-3xl">Resume Examples</b>
          </h1>
          <p>
            <p className="text-2xl">
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
          <img className="mx-auto" src={image4} alt="interview-ace " />
        </div>
        <div className="ParaGraphs">
          <h1>
            <b className="text-3xl">Let us be a part of Your Success!</b>
          </h1>

          <p className="text-2xl">
            Need help building your resume? By analyzing thousands of winning
            resumes, we were able to build guides to help you build the perfect
            resume for the job you want. We’re adding more and more examples and
            guides every week in order to have the most comprehensive directory
            of resume examples. Click below to check out some of our featured
            resume examples along with tips for making your resume stand out!{" "}
          </p>
        </div>
        <div className="gapsDiv">
          <img className="mx-auto" src={image6} alt="decorative " />
        </div>
      </div>

      <div className="footer flex flex-row justify-center">
        <img src={image5} width="200" alt="footer" />
        <p className="text-2xl flex items-center">Copyright &copy;2022 Star Resume. All rights reserved. </p>
      </div>
    </body>
  );
};
export default Header;
