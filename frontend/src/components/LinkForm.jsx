import React from 'react'
import styled from "styled-components";
import FormRow from './FormRow';
import { useLinksContext } from '../context/links_context';

const LinkForm = () => {
  const {formLinksArr, createLink, getLinks} = useLinksContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const areFieldsEmpty = formLinksArr.some(item => item.link === "");
    if (areFieldsEmpty) {
      return;
    } else {
      createLink(formLinksArr)
    }
  };

  return (
    <Wrapper>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          
          <div className="form-content">
            {
              formLinksArr.map((linkObj, index) => {
                const {link, platform} = linkObj;
                return <FormRow key={index} _id={linkObj._id} values={{link, platform}}/>
              })
            }
            <div className="btn-container">
              <button className="btn">Save</button>
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 400px;
  .form-container {
    .btn-container {
      float: right;
      .btn {
        display: inline-block;
      }
      @media screen and (max-width: 700px) {
        float: unset;
        .btn {
          width: 100%;
        }
      }
    }
  }
`;

export default LinkForm