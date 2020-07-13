import React from "react";
import styled from "styled-components";
import Header from "./Header";
import SearchIcon from "../Images/search.svg";
import tutor1 from "../Images/friend1.png";
import Image from "../Images/bannerImage.png";

// css
const BannerContainer = styled.div`
  background: #3c415e;
  height: 83vh;

  .bannerContents {
    display: flex;
    margin: auto 0;
    margin: auto 0;
    padding: 0.3rem 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #f7f4e3;
  }
  .welcomeText h3 {
    font-size: 4rem;
    line-height: 5.36rem;
    letter-spacing: 0.11rem;
  }
  .welcomeText h3::after {
    white-space: nowrap;
    content: leader(dotted);

    background-color: red;
    position: absolute;
  }
  .welcomeText p {
    margin-top: -3rem;
    font-size: 1.1rem;
    letter-spacing: 0.14rem;
    line-height: 2.16rem;

    opacity: 0.68;
  }
  .search {
    position: absolute;

    z-index: 3000000;
    border-radius: 5px;
    padding: 0.5rem;
    background: white;
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: space-between;
  }
  .search img {
    font-size: 0.1rem;
    height: 14px;
    width: 15px;
    margin-top: 0.91rem;
    margin-right: 0.6rem;
    margin-left: 0.6rem;
  }
  .search input {
    background: transparent;
    border: none;
    color: black;
    outline: none;
    width: 600px;
    font-size: 1.12rem;
  }
  .orangeBtn {
    background: #ff7657;
    padding: 0.699rem 1.86rem;
    border-radius: 5px;
    border: none;
    color: #f7f4e3;
    margin-left: 3rem;
    font-weight: bold;
    font-size: 1.12rem;
  }
  .bannerImage {
    background-color: #fee4a6;
    z-index: 30;
    width: 41%;
    height: 630px;
    margin-top: 3rem;
    border-top-right-radius: 200px;
    border-bottom-left-radius: 200px;
  }
  .studentImage {
    positiom: absolute;
    right: 0;
    width: 800px;
    height: 565px;
    margin-top: -28rem;
    margin-left: -7.8rem;
  }

  .chats {
    position: absolute;
    right: 45px;
    top: 140px;
  }

  .tutorChat {
    display: flex;
    flex-direction: row;
    border-radius: 70px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 120px;

    ${"" /* padding: */}
    padding:0 .4rem .24rem .3rem;
    background: #99b898;
    background: #7fa99b;
    color: white;
    width: 270px;
  }
  .reply {
    border-radius: 70px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 120px;
    background: #7fa99b;
    ${"" /* padding:0 4rem .24rem .3rem; */}
    padding:.97rem 0rem .95rem 1.8rem;
    line-height: 1.35rem;
    font-size: 0.89rem;
    font-weight: 600;
    width: 220px;
    margin-left: 8.3rem;
    color: white;
  }
  .tutorChat p {
    line-height: 1.35rem;
    font-size: 0.89rem;
    font-weight: 600;
  }

  .tutorImage {
    width: 45px;
    height: 43.6px;
    border-radius: 50%;
    background: #3c415e;
    margin-left: 1.3rem;
    margin-right: 1rem;
    margin-top: 1rem;
  }

  .friendsConvo {
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
  }

  .friendsConvo img {
    width: 65px;
    height: 65px;
    ${"" /* padding: 1rem; */}
    ${"" /* background: #ff7657; */}
  }
  .friendOne {
    border-radius: 50%;
    border-bottom-right-radius: 0px;
    background: #7fa99b;
    margin-left: 6rem;
    margin-top: 11rem;
  }
  .friendTwo {
    border-radius: 50%;
    border-top-left-radius: 0px;
    background: #7fa99b;
    margin-left: 3rem;
    margin-top: 5rem;
    background: #3c415e;
  }
  .friendThree {
    width: 65px !important;
    height: 63px !important;
    border-radius: 50%;
    border-bottom-left-radius: 0px;
    background: #7fa99b;
    margin-left: 6rem;
    margin-top: rem;
    background: #ff7657;
  }

  .users {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border-radius: 110px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 200px;

    background-color: #f5f5f5;
    padding: 0.6rem 10rem;
    top: 41.6rem;
    width: 900px;
    margin-bottom: 3rem;

    h2 {
      margin-left: 2rem;
      font-size: 2rem;
      color: #3c415e;
    }

    #smallText {
      font-size: 0.89rem;
      opacity: 0.58;
      line-height: 0.3rem;
      width: 10px;
      text-wrap: wrap;
      color: black;
    }
  }
`;

function Banner() {
  return (
    <BannerContainer>
      <Header />
      <div className="bannerContents">
        <div className="welcomeText">
          <h3>
            We help you find <br />
            and manage tutors.
          </h3>
          <p>
            With Gurules you can find and manage <br /> your meetings with tutors.
          </p>
          <div className="search">
            <img src={SearchIcon} alt="search for tutor" />
            <input type="text" placeholder="search subject, tutor's name or location..." />
            <button className="orangeBtn">Search</button>
          </div>
        </div>

        <div className="bannerImage">
          <div className="chats">
            <div className="tutorChat">
              <img className="tutorImage" src={tutor1} />
              <p>
                Can we change the <br></br>for schedule?{" "}
              </p>
            </div>
            <p className="reply">
              Of course, how about <br />
              tommorow?{" "}
            </p>
          </div>
          <div className="friends">
            <div className="friendsConvo">
              <img className="friendOne" src={tutor1} />
              <img className="friendTwo" src={tutor1} />
              <img className="friendThree" src={tutor1} />
            </div>
            <img src={Image} alt="student" className="studentImage" />
          </div>
        </div>
      </div>
      <div className="users">
        <h2>
          15,000+ <br />
          <span id="smallText">
            Tutor have <br /> joined us
          </span>
        </h2>
        <h2>
          100,000+ <br />
          <span id="smallText">
            Students have <br />
            used Gurules
          </span>
        </h2>
      </div>
    </BannerContainer>
  );
}

export default Banner;
