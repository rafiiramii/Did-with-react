import React from "react";
import styled from "styled-components";
import Image from "../Images/about.jpeg";

// css
const AboutContainer = styled.div`
  height: 45vh;
  padding: 18rem 10rem;
  display: flex;
  
    .aboutImage  img {
      border-top-right-radius: 160px;
      border-bottom-left-radius: 160px;
      width: 600px;
      height: 500px;
      z-index:900000000000;
    }
    .aboutImage::before{
      content:'';
      display:block;
    background-color: #fee4a6;
      width:250px;
      height:260px;
      position:absolute;
      top:77.9rem;
      left:3.4rem;
      border-radius: 50%;
      z-index:-20;
    border-bottom-right-radius: 0px;
    }
  }
  .aboutText {
    margin-left: 5rem;
    color:#3c415e;
     
    h3{
      width:45%;
      font-size:4rem;
    line-height: 5.36rem;

      color:#3c415e;
    letter-spacing: 0.11rem;

    }

    p{
    letter-spacing: 0.04rem;

    line-height: 2.86rem;
    font-size:1.34rem;
     opacity:.91;
    }
  }
`;

function About() {
  return (
    <AboutContainer>
      <div className="aboutImage">
        <img src={Image} alt="about gurules" />
      </div>

      <div className="aboutText">
        <h3>What is Gurules?</h3>
        <p>Gurules is a platform that helps you find tutors and manage your tutoring activities. With Gurules you can search for tutors from a variety of fields, locations, and prices. Your tutorin activities are also more organized with our scheduling feature.</p>
      </div>
    </AboutContainer>
  );
}

export default About;
