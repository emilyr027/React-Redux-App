import React, { useEffect } from "react";
import { connect } from 'react-redux';
import getActivity from "../actions/index";
import styled from 'styled-components';

const StyledButton = styled.button`
    display:block;
    background-color:#f7797d;
    color:#fff;
    font-size:.9rem;
    border:0;
    border-radius:5px;
    height:40px;
    width:50%;
    padding: 0 10px;
    cursor:pointer;
    box-sizing:border-box;
    margin-top:5%;
    margin-bottom:7%;
`

const StyledTagline = styled.div`
  background-color: #d2efe7;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:7%;
  width:80%;
  box-shadow: 0px 0px 8px 0px white;
`


const Activity = ({ activity, isFetching, error, getActivity }) => {
  useEffect(() => {
    getActivity();
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>An idea is coming...wait patiently!</h2>;
  }

  const handleClick = ()=> {
    getActivity();
  }

  return (
    <>
      <StyledTagline><h3>{activity}</h3></StyledTagline>
      <StyledButton onClick={handleClick}>Something else, please!</StyledButton>
    </>
  );
};

const mapStateToProps = state => {
  return {
    activity: state.activity,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, {getActivity})(Activity);

