import React, { Component } from 'react';
import './App.css';

import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { FaBeer } from 'react-icons/fa';

class TechItemlist extends Component {

  state = {
    isChecked: true,

  };


/*
  toggleChange = () => {
    console.log("isChecked is ", this.isChecked);
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

*/

  componentDidMount() {


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

        <h5> HEY asdsadasdasdasdasdasddasdsadasdsaasdadsadsdsdsad </h5>
        <h5> HEY asdsadasdasdasdasdasddasdsadasdsaasdadsadsdsdsad </h5>
        <h5> HEY asdsadasdasdasdasdasddasdsadasdsaasdadsadsdsdsad </h5>
        <h5> HEY asdsadasdasdasdasdasddasdsadasdsaasdadsadsdsdsad </h5>
        <h5> HEY asdsadasdasdasdasdasddasdsadasdsaasdadsadsdsdsad </h5>
        <h5> HEY asdsadasdasdasdasdasddasdsadasdsaasdadsadsdsdsad </h5>


      </div>



    )
  }

}


/*
const mapStateToProps = ({}) => ({


});

export default withRouter(
  connect(
    mapStateToProps,
    {}

  )(Itemlist)

);

*/

export default TechItemlist;