import React from "react";
import styled from "styled-components";
// css
const HeaderContainer = styled.div`
  ${"" /* background: #3c415e; */}
  margin: auto 0;
  padding: 1.6rem 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #f7f4e3;

  ul {
    list-style: none;
    display: flex;
    margin: auto 0;
  }
  li {
    margin-left: 3rem;
    margin-top: 0.3rem;
    font-weight: lighter;
  }
  .orangeBtn {
    background: #ff7657;
    padding: 0.39rem 1rem !important;
    border-radius: 5px;
    border: none;
    color: #f7f4e3;
    margin-left: 3rem;
    font-weight: bold;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <h2>Gurules</h2>
      <ul>
        <li>About</li>
        <li>Find Tutor</li>
        <li>Contact</li>
        <li>Dashboard</li>
        <button className="orangeBtn">Login</button>
      </ul>
    </HeaderContainer>
  );
}

export default Header;
