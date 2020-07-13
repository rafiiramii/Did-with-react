import React from "react";
import styled from "styled-components";
import image from "../Images/friend1.png";
import location from "../Images/location.svg";
import time from "../Images/time.svg";
import music from "../Images/playing.jpeg";

// css
const TutorsContainer = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  border-radius: 180px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  padding-top: 7rem;
  .tutorContents {
    display: grid;
    grid-columns: 3;
    grid-rows: 2;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 25px;
    margin-left: 10rem;
    width: 60%;
    .tutorDetails {
      background-color: white;
      padding-left: 1.5rem;
      border-radius: 10px;
      width: 250px;
      width: 280px;
      padding-right: 1rem;
      height: 260px;
      h5 {
        color: red;
        border-radius: 120px;
        padding: 0.5rem 0.98rem;
        background-color: pink;
        width: fit-content;
      }
      h3 {
        line-height: 1.83rem;
      }

      .workDetails {
        display: flex;
        div {
          display: flex;
          flex-direction: row;
        }
        div:nth-child(2) {
          margin-left: 3rem;
        }

        img {
          opacity: 0.68;
          height: 13px;
        }
        p {
          margin-top: -0.124rem;
          margin-left: 0.34rem;
          font-size: 0.762rem;
        }
      }

      .photo {
        display: flex;
        ${"" /* margin-top: 1.2rem; */}
        width: fit-content;
        img {
          border-radius: 3.5px;
          background: #7fa99b;
          margin-top: 1.2rem;
          width: 40px;
          height: 45px;
        }
        h6 {
          font-size: 0.98rem;
          margin-left: 1rem;
          ${"" /* position: absolute; */}
          left: 15rem;
          top: 152.9rem;
        }
      }
    }

    .tutorDetails:nth-child(2) {
      height: 450px;
      width: 300px;
      padding-right: 1rem;
      h5 {
        color: #daa831;
        background-color: #fee4a685;
      }
      p {
        opacity: 0.78;
        line-height: 2rem;
      }
      .photo {
        margin-top: 2.5rem;
      }

      .workDetails {
        p {
          margin-top: -0.63rem;
        }
      }
    }

    .tutorDetails:nth-child(3) {
      background-color: transparent;
      margin-top: -7rem;
      margin-left: 2rem;

      h3 {
        font-size: 4rem;
        line-height: 5.36rem;
        color: #3c415e;
        width: 27rem;
        letter-spacing: 0.11rem;
      }
      a {
        color: #3c415e;
        cursor: pointer;
        border-bottom: 1px solid #3c415e;
      }
    }

    .tutorDetails:nth-child(4) {
      height: 370px;
      margin-top: -12rem;
      color: white;
      background-color: transparent;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      background-image: url(${music});

      h5 {
        color: black;
        font-weight: 900;
        background-color: gray;
      }
      h3 {
        margin-top: 12rem;
      }
      .workDetails {
        .location {
          img {
            fill: white;
          }
        }
      }
    }
    .tutorDetails:nth-child(5) {
      height: 180px;
      width: 300px;
      padding-right: 1rem;
    }

    .tutorDetails:nth-child(6) {
      margin-top: -10rem;

      h5 {
        color: #3c415e;
        background-color: #80808040;
      }
    }
  }
`;

function Tutors() {
  return (
    <TutorsContainer>
      <div className="tutorContents">
        <div className="tutorDetails">
          <h5>Designs</h5>
          <h3>Graphic Design Tutor (Photoshop & Illustrator)</h3>
          <div className="workDetails">
            <div className="location">
              <img src={location} alt="locatio" />
              <p>Tanzania</p>
            </div>
            <div className="time">
              <img src={time} alt="experience" />
              <p>3 years+</p>
            </div>
          </div>
          <div className="photo">
            <img src={image} alt="tutor" />
            <h6>Sarah Ally</h6>
          </div>
        </div>
        {/* detail two */}

        <div className="tutorDetails">
          <h5>Language</h5>
          <h3>
            Specialist English
            <br /> Tutoring
          </h3>
          <div className="workDetails">
            <div className="location">
              <img src={location} alt="locatio" />
              <p>Kenya</p>
            </div>
            <div className="time">
              <img src={time} alt="experience" />
              <p>10 years+</p>
            </div>
          </div>
          <p>Hey there. I'm Rafy a tutor with over 10 yers of experiences who has worked with over 1000 students</p>
          <div className="photo">
            <img src={image} alt="tutor" />
            <h6>Rafia Ramadhani</h6>
          </div>
        </div>
        {/* detail three */}
        <div className="tutorDetails">
          <h3>The most popular tutor</h3>

          <a>Explore All 15,000+ Tutors</a>
        </div>

        {/* detail four */}
        <div className="tutorDetails">
          <h5>Music</h5>
          <h3>
            Piano and Violin <br />
            Tutor
          </h3>
          <div className="workDetails">
            <div className="location">
              <img src={location} alt="locatio" />
              <p>Congo</p>
            </div>
            <div className="time">
              <img src={time} alt="experience" />
              <p>3 years+</p>
            </div>
          </div>
        </div>
        {/* detail five */}
        <div className="tutorDetails">
          <h5>Art</h5>
          <h3>Visual Art Tutor</h3>
          <div className="workDetails">
            <div className="location">
              <img src={location} alt="locatio" />
              <p>Algeria</p>
            </div>
            <div className="time">
              <img src={time} alt="experience" />
              <p>3 years+</p>
            </div>
          </div>
        </div>
        {/* detail six */}
        <div className="tutorDetails">
          <h5>Music</h5>
          <h3>
            Experienced Guitar <br /> Tutor
          </h3>
          <div className="workDetails">
            <div className="location">
              <img src={location} alt="locatio" />
              <p>Nigeria</p>
            </div>
            <div className="time">
              <img src={time} alt="experience" />
              <p>4 years+</p>
            </div>
          </div>
          <div className="photo">
            <img src={image} alt="tutor" />
            <h6>Juma Ally</h6>
          </div>
        </div>
      </div>
    </TutorsContainer>
  );
}

export default Tutors;
