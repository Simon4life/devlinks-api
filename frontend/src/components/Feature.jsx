import React from 'react'
import styled from 'styled-components';
import { FaLink } from "react-icons/fa6";
import { FaWrench } from "react-icons/fa";
import { RiBrush4Line } from "react-icons/ri";
import { IoMdLock } from "react-icons/io";
const Features = () => {
  return (
    <Wrapper className="feature-section">
      <h2>
        Our Core Ideas
      </h2>
      <p>share multiple link social links into one simple link for your audience.</p>
      <div className="features">
        <div className="feature">
          <span className='span-1'>
            <FaLink />
          </span>
          <h4>Centralized link hub</h4>
          <p>
            All your links in one place for easy access and preview.
          </p>
        </div>
        <div className="feature">
          <span className='span-2'>
            <RiBrush4Line />
          </span>
          <h4>Customizable profiles</h4>
          <p>
            Personalize your page with themes, colors, and custom branding.
          </p>
        </div>
        <div className="feature">
          <span className='span-3'>
            <FaWrench />
          </span>
          <h4>Lunch in minutes</h4>
          <p>
            No coding needed—just pick a username and start sharing your links.
          </p>
        </div>
        <div className="feature">
          <span className='span-4'>
            <IoMdLock />
          </span>
          <h4>Safe and Secure</h4>
          <p>
            Your data is protected, and you control what's publicly available.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 6rem 1rem;
  background: #f8fafc;
  @media (prefers-color-scheme: dark) {
    background: #0f172a;
  }

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: #0f172a;

    span {
      background: linear-gradient(90deg, #ff2e88, #6366f1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media (prefers-color-scheme: dark) {
      color: white;
    }
  }

  > p {
    text-align: center;
    font-size: 1.1rem;
    color: #64748b;
    max-width: 500px;
    margin: 0 auto 3rem;

    @media (prefers-color-scheme: dark) {
      color: #94a3b8;
    }
  }

  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .feature {
    background: white;
    padding: 2.5rem 2rem;
    border-radius: 1rem;
    text-align: center;
    transition: all 0.3s ease;
    border: 1px solid #e2e8f0;

    @media (prefers-color-scheme: dark) {
      background: #1e293b;
      border-color: #334155;
    }

    h4 {
      font-size: 1.25rem;
      font-weight: 700;
      margin: 1rem 0 0.8rem;
      color: #0f172a;

      @media (prefers-color-scheme: dark) {
        color: white;
      }
    }

    p {
      color: #64748b;
      font-size: 0.95rem;
      line-height: 1.6;

      @media (prefers-color-scheme: dark) {
        color: #94a3b8;
      }
    }

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
      border-color: #6366f1;
    }

    span {
      width: 70px;
      height: 70px;
      margin: 0 auto;
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      transition: transform 0.3s ease;
    }

    &:hover span {
      transform: scale(1.1);
    }

    .span-1 {
      background: rgba(16, 185, 129, 0.1);
      svg { color: #10b981; }
    }

    .span-2 {
      background: rgba(99, 102, 241, 0.1);
      svg { color: #6366f1; }
    }

    .span-3 {
      background: rgba(236, 72, 153, 0.1);
      svg { color: #ec4899; }
    }

    .span-4 {
      background: rgba(249, 115, 22, 0.1);
      svg { color: #f97316; }
    }
  }
`;

export default Features