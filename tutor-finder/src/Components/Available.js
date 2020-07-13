import React from "react";
import styled from "styled-components";
import apple from "../Images/apple.png";
import google from "../Images/google.png";
// import chat from "../Images/gurulez.png";
// css
const AvailableContainer = styled.div`
  display: flex;
  height: 90vh;
  padding: 2rem 10rem;

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
  .chat {
    border: 2px solid red;
    margin-left: 9rem;
    width: 30rem;
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
    </AvailableContainer>
  );
}

export default Available;
