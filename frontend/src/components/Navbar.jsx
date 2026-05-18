import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom';
import { FaLink, FaUser, FaEye } from "react-icons/fa";
import { useUserContext } from "../context/user_context"

const Navbar = () => {
  const { user, logoutUser } = useUserContext();
  const {userId} = user
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));
  }, [screenSize]);

  return (
    <Wrapper>
      <div className="navbar">
        <div>
          <Link to={"/"} className="logo">
            <img src={logo} className="logo-img" />
            {screenSize > 570 ? <h4>devlinks</h4> : null}
          </Link>
        </div>
        <div className="nav-center">
          <NavLink to={"/"} style={activeLinkStyle} className="link-btn">
            <FaLink className="link-icon" />
            {screenSize > 570 ? "Links" : null}
          </NavLink>

          <NavLink to={"/profile"} style={activeLinkStyle} className="link-btn">
            <FaUser className="link-icon" />
            {screenSize > 570 ? "Profile Details" : null}
          </NavLink>
        </div>
        <div className='btn-container'>
          <Link to={`/preview/${userId}`} className="preview-btn">
            {screenSize > 570 ? "Preview" : <FaEye />}
          </Link>
          <button className='logout-btn' onClick={() => logoutUser()}>logout</button>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 95vw;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 0.5rem;
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem 0.6rem;
    background: white;
    margin: 0 auto;
    margin-bottom: 0.8rem;
    width: 90vw;
    @media screen and (max-width: 782px) {
      // margin-bottom: 0;
    }
    .link-btn {
      background: transparent;
      color: var(--grey-7);
      font-weight: bold;
      display: inline-block;
      margin: 0 0.5rem;
      padding: 0.3rem 0.6rem;
      border-radius: 5px;

      .link-icon {
        margin: 0 0.3rem;
        display: inline-block;
      }
    }
    .preview-btn {
      color: var(--clr-purple);
      border: 2px solid var(--clr-purple);
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
    }

    .preview-btn:hover {
      backround-color: var(--clr-purple);
    }
  }
  .logo {
    display: flex;
    align-items: center;
    h4 {
      margin: 0;
      color: black;
      margin-left: 0.5rem;
      text-transform: lowercase;
      font-size: 1.2rem;
      letter-spacing: 0;
    }
  }
  .logo-img {
    display: block;
    width: 38px;
  }
  .btn-container {
    display: flex;
    align-items-center;
    gap: 2rem;

    .logout-btn {
      border: none;
      background: var(--clr-purple);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: .5rem;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      letter-spacing: var(--spacing);
    }
  }
`;

const activeLinkStyle = ({ isActive, isPending }) => {
  return {
    background: isActive ? "var(--clr-purple-light)" : "inherit",
    color: isActive ? "var(--clr-purple)" : "inherit"
  }
}

export default Navbar