import React from 'react';
import Activity from "./components/Activity";
import './App.css';
import appImage from './app-image.jpg';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:300i,400i,900i');
@import url('https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap');

h1 {
  font-family: 'Nothing You Could Do', cursive;
}

body {
    font-style: italic;
    color: #424C55;
    font-family: 'Roboto', sans-serif;
    display:flex;
    align-items:center;
    justify-content:center;
}
`
const StyledContainer = styled.div`
    display:flex;
    justify-content:center;
    max-width:100%;

`
const StyledApp = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  background-color:#9ADBC9;
  width: 30%;
  border-radius: 5%;
  box-shadow:0px 0px 8px 0px black;
  margin-top:5%;
`

const StyledHeader = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  background-color:#9ADBC9;
  max-width:100%;
  border-top-right-radius:5%;
  border-top-left-radius:5%;
`
// const StyledHeadingText = styled.div`
//   display:block;
// `
const StyledImage = styled.img`
  display:flex;
  width:75%;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin:5%;
  padding-top:5%;
`
const StyledTagline = styled.div`
  background-color: #d2efe7;
  /* background-color:#dba99a; */
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:0;
  max-width:100%;
  
}
`

function App() {
  return (
    <StyledContainer>
      <StyledApp>
        <StyledHeader>
          <StyledImage  src={appImage} alt="boredom app"/>
          <div className="styledh1">
          <h1>Tired of<br></br> Mundane Living? </h1>
          </div>
        </StyledHeader>

        <StyledTagline>
          <p>Pick a random idea to help ignite your creativity:</p>
        </StyledTagline>
        <Activity/>
      </StyledApp>
      </StyledContainer>
    // </div>
  );
}

export default App