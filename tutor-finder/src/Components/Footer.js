import React from "react";
import styled from "styled-components";

// css

const FooterContainer = styled.div`
  padding: 3rem 10rem 3.14rem 0rem;

  background-color: #3c415e;
  color: #f7f4e3ab;

  .footerTop {
    margin-left: 10rem;
    display: flex;
    justify-content: space-between;
    div {
      font-size: 0.8rem;
      display: flex;
      justify-content: space-between;
    }
    h1 {
      font-size: 1.2rem;
    }
    h3:nth-child(1) {
      margin-right: 3rem;
    }
  }

  .footerBottom {
    margin-left: 7rem;
    border: 2px solid #f74e3;
    display: flex;
    justify-content: space-between;
    .menus {
      margin-top: 2rem;
    }
    a {
      margin-left: 3rem;
      font-size: 0.9rem;
    }
    p {
      margin-top: 2rem;

      font-size: 0.9rem;
    }
  }
  .footerBottom::before {
    position: absolute;
    content: "";
    display: block;
    background-color: #f7f4e35e;
    width: 1260px;
    height: 0.39px;
    margin-left: 3rem;
  }
`;
function Footer() {
  return (
    <FooterContainer>
      <div className="footerTop">
        <h1>Gurules</h1>
        <div>
          <h3>Privacy Policy</h3>
          <h3>Terms</h3>
        </div>
      </div>
      <div className="footerBottom">
        <div className="menus">
          <a>About</a>
          <a>Find Tutor</a>
          <a>Contact</a>
          <a>Dashboard</a>
        </div>
        <p>&copy; 2020 Gurules All right reserved</p>
      </div>
    </FooterContainer>
  );
}
export default Footer;
