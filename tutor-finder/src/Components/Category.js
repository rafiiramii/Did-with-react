import React from "react";
import styled from "styled-components";
import category1 from "../Images/art.svg";
import category2 from "../Images/language.svg";
import category4 from "../Images/music.svg";
import category5 from "../Images/academic.svg";

// css
const CategoryContainer = styled.div`
  height: 45vh;
  padding: 3rem 10rem;
  padding-bottom: 10rem;
  display: flex;

  .categoryText {
    color: #3c415e;

    h3 {
      width: 45%;
      font-size: 4rem;
      line-height: 5.36rem;

      letter-spacing: 0.11rem;
    }
    p {
      letter-spacing: 0.04rem;

      font-size: 1.34rem;
      opacity: 0.91;
    }
  }

  .categoryType {
    margin-left: 10rem;
    display: grid;
    grid-columns: 3;
    grid-rows: 2;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 30px;

    div {
      background-color: red;
      width: 180px;
      height: 180px;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
      font-weight: 700;
    }
    div img {
      width: 3.25rem;
    }
    div:nth-child(odd) {
      background: #7fa99b;
      border-radius: 30%;
      text-align: center;
      border-bottom-right-radius: 0px;
    }
    div:nth-child(even) {
      background-color: #fee4a6;
      border-radius: 30%;
      border-top-left-radius: 0px;
    }

    div:nth-child(3) {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 30%;
      background-color: #3c415e;
      color: white;
      h3 {
        font-size: 2rem;
      }
      p {
        margin-top: -1rem;
      }
    }
    div:nth-child(4) {
      grid-column: 2/3;
      margin-left: -7rem;
    }
    div:nth-child(5) {
      margin-left: -7rem;
    }
  }
`;

function Category() {
  return (
    <CategoryContainer>
      <div className="categoryText">
        <h3>Browse Category</h3>
        <p>Find tutors from various categories</p>
      </div>
      <div className="categoryType">
        <div>
          <img src={category1} alt="art &designs" />
          <p>Art & Design</p>
        </div>
        <div>
          <img src={category2} alt="language" />
          <p>Language</p>
        </div>
        <div>
          <h3>10+</h3>
          <p>More</p>
        </div>
        <div>
          <img src={category4} alt="music" />
          <p>Music</p>
        </div>
        <div>
          <img src={category5} alt="academics" />
          <p>Academics</p>
        </div>
      </div>
    </CategoryContainer>
  );
}

export default Category;
