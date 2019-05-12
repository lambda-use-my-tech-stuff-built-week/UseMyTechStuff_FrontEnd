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
          color: "black",
          display: "flex",
          flexDirection: "column",
          padding: "50px",
        } }
      >

        <h2> Available Used Tech !!!  </h2>


        {this.props.techItems.techItems.map( (techItem, id ) => (
          <div key = {id}>
            <h3> ID: {techItem.user_id} </h3>
            <h4> Name: {techItem.name} </h4>
            <h4> Category: {techItem.category} </h4>
            <img
              style = { {
                maxWidth: "40%",
                padding: "10px",
              } }

              src =  {techItem.picture} alt = "alt-img"  />
            <h4> Cost: {techItem.cost} </h4>
            <h4> Availability: {techItem.availability} </h4>
            <h4> Description: {techItem.description} </h4>


          </div>
         ))}






      </div>

    )
  }
}

/*


 */


/*
        {this.props.techItems.techItems.map( (techItem, index) => (
          <div
            key = {index}>
            <h6> {techItem.name} </h6>
          </div>
        ))}

 */



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
