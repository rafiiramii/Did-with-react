import React from "react";
import styled from "styled-components";
import apple from "../Images/apple.png";
import google from "../Images/google.png";
import screen from "../Images/screenShot.png";
import time from "../Images/time2.png";

// css
const AvailableContainer = styled.div`
  display: flex;
  height: 90vh;
  padding: 2rem 10rem;
  padding-top: 2.4rem;
  .availableContents {
    width: 45%;
    h3 {
      font-size: 4rem;
      color: #3c415e;
      line-height: 5.36rem;
      letter-spacing: 0.11rem;
    }

    p {
      color: black;
      opacity: 0.689;
      line-height: 2.36rem;
      font-size: 1.16rem;
      font-size: 1.34rem;
      margin-top: -1.5rem;
      width: 33rem;
    }
    .stores {
      display: flex;
      margin-top: 3rem;
      div {
        background-color: black;
        display: flex;
        border-radius: 4px;
        width: fit-content;
        height: 38px;
        paddin: 0;
        padding-top: 0.6rem;
        padding-left: 0.7rem;
        padding-right: 0.45rem;
        h6 {
          font-size: 0.7rem;
          color: yellow;
          color: #f7f4e3;
          margin-top: -0.01rem;
          letter-spacing: 0.01rem;
          margin-left: 0.34rem;
        }

        .bigText {
          font-size: 0.99rem;
          color: white;
        }
      }
      div:nth-child(2) {
        margin-left: 1.42rem;
        padding-left: 0;

        img {
          width: 50px;
          height: 35px;
        }
        h6 {
          margin-left: -0.2rem;
        }
      }
      img {
        width: 30px;
        height: 30px;
      }
    }
  }

  .chatScreen {
    z-index: 8000;

    .avalaibleScreen {
      z-index: 800;

      border: 13px solid black;
      border-radius: 30px;
      height: 560px;
      margin-top: 3rem;
      margin-left: 16rem;
      img {
        z-index: 800;
        transform: rotate(15deg);
        height: 560px;
      }
      img:after {
        content: "";
        display: block;
        background-color: black;
        position: absolute;
        width: 100px;
        height: 40px;
        right: 12rem;
      }
    }

    .informations {
      background-color: white;
      margin-top: -17rem;
      margin-left: 2.5rem;
      position: relative;
      z-index: 900000000000000000 !important;
      box-shadow: 1px 1px 12px 1px #888888;
      width: 260px;
      border-radius: 15px;
      padding: 1rem 0.5rem;
      padding-bottom: 6rem;
      font-size: 0.8rem;
      p {
        font-weight: bolder;
        margin-left: 1rem;
        margin-top: 1rem;
      }
      input {
        margin-left: 1rem;
      }
    }
    .time {
      margin-top: -23rem;
      margin-left: 27rem;
      box-shadow: 1px 1px 12px 1px #888888;
      border-radius: 3px;
      position: absolute;
      background: #7fa99b;
      width: 290px;
      height: 60px;
      display: flex;
      flex-direction: row;
      color: white;
      padding-left: 0.5rem;
      div {
        margin-left: 0.4rem;
      }
      img {
        background-color: #ffffff2e;
        border-radius: 2px;
        padding: 0.56rem;
        margin-top: 1rem;
        width: 14px;
        height: 12px;
      }
      p {
        font-size: 0.86rem;
        font-weight: bolder;
      }
      h6 {
        font-size: 0.76rem;

        margin-top: -0.7rem;
      }
    }
  }
`;

function Available() {
  return (
    <AvailableContainer>
      <div className="availableContents">
        <h3>
          Easier with <br />
          your phone
        </h3>
        <p>Now Gurules is availble on Play Store and App Store. Dowload the application to access tutors more easily and get other attractive promos.</p>

        <div className="stores">
          <div className="apple">
            <img src={apple} alt="apple store" />
            <h6>
              Dowload for the <br />
              <span className="bigText">App Store</span>
            </h6>
          </div>
          <div className="google">
            <img src={google} alt="google play store" />
            <h6>
              GET IT ON <br /> <span className="bigText">Google Play</span>
            </h6>
          </div>
        </div>
      </div>
      <div className="chatScreen">
        <div className="avalaibleScreen">
          <img src={screen} />
        </div>
        <div className="informations">
          <p>Meeting Places</p>
          <div>
            <input type="radio" name="home" />
            Home
            <input type="radio" name="home" />
            Online
            <input type="radio" name="home" />
            Class
          </div>
          <div>
            <p>Gender</p>
            <div>
              <input type="radio" name="home" />
              Female
              <input type="radio" name="home" />
              Male
            </div>
          </div>
        </div>
        <div className="time">
          <img src={time} />
          <div>
            <p>Meeting time</p>
            <h6>this suppose to be the time you choose</h6>
          </div>
        </div>
      </div>
    </AvailableContainer>
  );
}

export default Available;
