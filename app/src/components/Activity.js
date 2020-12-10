import React, { useEffect } from "react";
import { connect } from 'react-redux';
import getActivity from "../actions/index";



const Activity = ({ activity, isFetching, error, getActivity }) => {
  useEffect(() => {
    getActivity();
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching quote for ya!</h2>;
  }

  const handleClick = ()=> {
    getActivity();
  }

  return (
    <>
      <h3>{activity}</h3>
      <button onClick={handleClick}>I need a new activity!</button>
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

