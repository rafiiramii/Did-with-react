import React from "react";
import styled from "styled-components";
import Header from "./Header";
import SearchIcon from "../Images/search.svg";
// import Image from "../Images/bannerimg.png";
import Image from "../Images/bannerImage.png";

// css
const BannerContainer = styled.div`
  background: #3c415e;
  height: 100vh;

  .bannerContents {
    display: flex;
    margin: auto 0;
    margin: auto 0;
    padding: 3rem 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #f7f4e3;
  }
  .welcomeText h3 {
    font-size: 4.25rem;
    line-height: 5.36rem;
    letter-spacing: 0.11rem;
  }
  .welcomeText p {
    margin-top: -3rem;
    font-size: 1.17rem;
    letter-spacing: 0.14rem;
    line-height: 2.16rem;

    opacity: 0.68;
  }
  .search {
    position: absolute;

    z-index: 3000000;
    border-radius: 5px;
    padding: 0.7rem;
    background: white;
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: space-between;
  }
  .search img {
    font-size: 0.1rem;
    height: 14px;
  }
  .search input {
    background: transparent;
    border: none;
    color: black;
  }
  .orangeBtn {
    background: #ff7657;
    padding: 0.99rem 1.86rem !important;
    border-radius: 5px;
    border: none;
    color: #f7f4e3;
    margin-left: 3rem;
    font-weight: bold;
    font-size: 1.12rem;
  }
  .bannerImage {
    background-color: #fee4a6;
    ${"" /* position: absolute; */}
    ${"" /* right: 140px; */}
    z-index: 30;
    width: 44%;
    height: 790px;
    border-top-right-radius: 200px;
    border-bottom-left-radius: 200px;
  }
  .bannerImage img {
    ${"" /* ${"" /* width: 130%; */} */}
    width:100%;
    ${"" /* margin-left:-14rem; */}
    height: 1780px;
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
            <input type="text" placeholder="search subject, tutor's name or location" />
            <button className="orangeBtn">Search</button>
          </div>
        </div>

        <div className="bannerImage">
          <img src={Image} alt="student" />
        </div>
      </div>
    </BannerContainer>
  );
}

export default Banner;
