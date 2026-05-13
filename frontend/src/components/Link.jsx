import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {useLinksContext} from "../context/links_context"
import platformIcons from '../utils/platformIcons';
import { FaArrowRight } from 'react-icons/fa';

const Links = () => {
  const {formLinksArr} = useLinksContext();
  return (
    <Wrapper className="preview-link">
      {
        formLinksArr.map((item, index) => {
          return (
            <Link to={item.link} key={index}>
              {platformIcons[item.platform]}
              {item.platform} <FaArrowRight className="arrow-right" />
            </Link>
          );
        })
      }
     
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1rem;
  position: absolute;
  top: 13rem;
  left: 11rem;
  a {
    padding: 0.5rem;
    display: block;
    width: 150px;
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    color: white;
    border-radius: 5px;
    background: black;
    font-size: 1rem;
    svg {
      margin-right: 0.5rem;
    }
    .arrow-right {
      margin-left: 52px;
    }
`;
export default Links