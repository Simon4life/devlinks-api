import React from 'react'
import styled from "styled-components"
import mainImg from "../assets/hompage-ill.jpg";
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <Wrapper className="hero-section">
      <div className="hero-texts">
        <h2>
          Simple link for <br /> <span>Everything.</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          
        </p>
        <Link className="btn">Get started <FaArrowRightLong className='arrow-right'/></Link>
      </div>
      <div className="img-container">
        <img src={mainImg} alt="phone picture" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: white;
  min-height: calc(100vh - 8rem);
  // color: var(--clr-white);
  display: flex;
  background: #fcfcfc;
  align-items: center;
  margin: 0 auto;
  padding: 0 2rem;
  .img-container {
    display: none;
  }
  @media screen and (min-width: 789px) {
    background: white;
    justify-content: center;
    .img-container {
      display: block;
    }
    .img-container img {
      width: 600px;
    }
  }
  .hero-texts {
    h2 {
      font-size: 3rem;
      span {
        color: var(--clr-purple);
      }
    }
    p {
      margin: 1.6rem 0;
      letter-spacing: var(--letterSpacing);
      font-size: 1.2rem;
    }
  }

  .btn {
    background: var(--clr-purple);
    color: var(--clr-white);
    text-transform: unset;
    display: flex;
    align-items: center;
    font-size: 1rem;
    width: fit-content;
    .arrow-right {
      display: inline-block;
      margin-left: .8rem;
    }
  }
`;
export default Hero