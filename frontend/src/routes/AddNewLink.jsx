import React, {useEffect} from 'react';
import styled from "styled-components";
import Phone from "../components/Phone";
import LinksForm from '../components/LinkForm';
import {useLinksContext} from "../context/links_context";
import {useQuery} from "@tanstack/react-query"
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
const AddNewLink = () => {
  const {addLink, getLinks} = useLinksContext();
  const loaderData = useLoaderData();
  useEffect(() => {
    getLinks();
  }, [])

  return (
    <Wrapper>
      <div className='main-content'>
        <Phone/>
        <div className="section-center">
          <div className="form-header">
            <h3>Customize your links</h3>
            <p>
              Add/edit/remove links below and then share all your profiles with
              the world
            </p>
            <button
              className="btn block-btn"
              onClick={() => addLink()}
            >
              Add new link
            </button>
          </div>
          <LinksForm />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 90vw;
    margin: 0 auto;
  }
  @media screen and (max-width: 786px) {
    .main-content {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 930px) {
    .main-content {
      gap: 0;
    }
  }
  .section-center {
    background: var(--clr-white);
    padding: 1rem;
    border-radius: var(--radius);
    .form-header {
      h3 {
        margin-bottom: 0.2rem;
        font-size: 1.5rem;
      }
      p {
        color: #4f4e52;
        margin-bottom: 0.5rem;
      }
    }
    .block-btn {
      width: 100%;
      background: transparent;
      color: var(--clr-purple);
      font-weight: bolder;
      border: 2px solid var(--clr-purple);
    }
    .block-btn:hover {
      background: var(--clr-purple);
      color: white;
    }
  }
`;

export default AddNewLink