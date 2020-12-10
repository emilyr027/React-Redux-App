import React from 'react';
import Activity from "./components/Activity";
import appImage from './app-image.jpg';
import styled, { createGlobalStyle } from 'styled-components';
import './App.css';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:300i,400i,900i');
@import url('https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap');

body {
  color:#424C55;
  font-family: 'Roboto', sans-serif;
  display:flex;
  justify-content: center;
  align-items: center;
  margin:0;
}

p{
  font-weight: 400;
  font-style:italic;
  padding-left:5%;
  padding-right:5%;
}

img {
  width:75%;
  border-radius: 50%;
}

h1 {
  font-family: 'Nothing You Could Do', cursive;
  color:#f2f2f2f2;
  margin-top:0;
  size:1.2rem;
  display:flex;
  align-items: center;
  justify-content: center;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;

}

h2 {
  font-family: 'Nothing You Could Do', cursive;
}

h3 {
  font-family: 'Nothing You Could Do', cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  padding:5px;
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
  margin-bottom:-12%;
`
const StyledImage = styled.img`
  display:flex;
  width:75%;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin:5%;
  padding-top:5%;
  margin-bottom:-4%;
`

function App() {
  return (
    <>
    <GlobalStyle/>
    <StyledContainer>
      <StyledApp>
        <StyledHeader>
          <StyledImage  src={appImage} alt="boredom app"/>
          <div className="styledh1">
          <h1>Tired of<br></br> Mundane Living? </h1>
          </div>
        </StyledHeader>

        
          <p>...ignite your creativity with a new idea!</p>
        
        
        <Activity/>
      </StyledApp>
      </StyledContainer>
    </>
  );
}

export default App