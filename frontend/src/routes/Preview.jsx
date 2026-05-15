import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import PreviewCard from '../components/PreviewCard';
import {useParams} from "react-router-dom";
import customFetch from '../utils/customFetch';
import { useUserContext } from '../context/user_context';
import { useLinksContext } from '../context/links_context';
import { FaArrowLeft, FaShare } from 'react-icons/fa';

const Preview = () => {
  const {userId} =  useParams();
  const {user} =useUserContext();
  const {getLinks} = useLinksContext();
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState()


  const fetchUserData = async() => {
    try {
      const response = await customFetch().get(`/api/v1/profile/${userId}`);
      const {user}= response.data
      setData(user);
      setIsLoading(false)
      return user;
    } catch (error) {
      console.log(error)
    }
    
  }
  useEffect(() =>{
    fetchUserData();
    getLinks()
  }, [])

  if(isLoading) {
    return <h2>Loading</h2>
  }
  
  return (
    <Wrapper>
      <div className="banner">
        <nav>
          <Link to="/"><FaArrowLeft/></Link>
          <Link to="/ "><FaShare/></Link>
        </nav>
      </div>
      <div className="preview-card">
        <PreviewCard user={data} />
      </div>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  .banner {
    background: var(--clr-purple);
    height: 40vh;
    border-radius: 0 0px 20px 20px;
    padding: 1rem;
    @media screen and (max-width: 700px) {
      height: 30vh;
    }
    nav {
      width: 90vw;
      padding: 1rem;
      display: flex;
      margin: 0 auto;
      background: white;
      justify-content: space-between;
      align-items: center;
      border-radius: 5px;
      
      a {
        display: block;
        color: black;
        font-size: 1.2rem;
      }
    }
  }
  .preview-card {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Preview