import React, { Component } from 'react';
import './App.css';

import Loader from 'react-loader-spinner';

import {getTech} from '../actions';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { FaBeer } from 'react-icons/fa';

class TechItemlist extends Component {


/*
  toggleChange = () => {
    console.log("isChecked is ", this.isChecked);
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

*/

  componentDidMount() {
    this.props.getTech();
  }

  // handlers




  render() {

    return (
      <div
        style = { {
          width: "100%",
          backgroundColor: "lightgray",
          display: "flex",
          flexDirection: "column",
          padding: "50px",
        } }
      >

        <h3> Lets go for a <FaBeer />? </h3>
        <h2> Available Used Tech !!!  </h2>

      </div>

    )
  }
}



        {this.props.techItems.techItems.map( (techItem, index) => (
          <div
            key = {index}>
            <h6> {techItem.name} </h6>
          </div>
        ))}





const mapStateToProps = ({techItems, fetchingData}) => ({
  techItems,
  fetchingData,


});

export default withRouter(
  connect(
    mapStateToProps,
    {getTech}

  )(TechItemlist)

);
