import React from 'react'
import styled from "styled-components"
const LoadingSpinner = () => {
  return (
    <Wrapper>
      <div className="loading-spinner"></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    animation: spin 5s linear infinite;
    .loading-spinner {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        border: 3px solid white;
        border-top: 3px solid transparent;
        

    }

`


export default LoadingSpinner