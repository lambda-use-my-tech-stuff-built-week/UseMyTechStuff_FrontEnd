import React, { Component } from 'react';
import './App.css';

import Loader from 'react-loader-spinner';

import {getTech, deleteTech, updateTech, addTech} from '../actions';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
// import { FaBeer } from 'react-icons/fa';
import AddTechForm from './AddTechForm';
// import axios from "axios";
import TechItem from './TechItem';


class TechItemlist extends Component {


  componentDidMount() {
    this.props.getTech();
  }

  // handlers

/*
  handleDelete = (e, id) => {
    console.log(">>>>>>>>>>>>>>>>>>> deleting");
    e.preventDefault();
    this.props.deleteTech(id);
  };
*/

/*
  handleUpdate  = (e, id, tech) => {

    //   const {name, user_id, category, picture, description, cost, availability} = this.state;


    e.preventDefault();
    this.props.updateTech(id, tech);
  };
*/


  render() {

    console.log("HEY");

    return (
      <div className = "techItemsList-container">

        <AddTechForm/>

        {this.props.techItems.fetchingData?
          <Loader className = "section" type="Rings" color="deeppink" height="260" width="280" />
          :
          <h3 className = "techTitle"> TechItems for Rent !</h3>
        }

        {this.props.techItems.techItems.map( (techItem, id ) => (

          <TechItem
            techItem = {techItem}
            id = {id}
          />

        ))}

      </div>

    )
  }
}

/*
const mapStateToProps = ({techItems, fetchingData, deletingTech, updatingTech, addingTech}) => ({
  techItems,
  fetchingData,
//  deletingTech,
//  updatingTech,
//  addingTech,


});

export default withRouter(
  connect(
    mapStateToProps,
    {getTech}
  )(TechItemlist2)
);

*/




const mapStateToProps = ({techItems, fetchingData, deletingTech, updatingTech, addingTech}) => ({
  techItems,
  fetchingData,
  deletingTech,
  updatingTech,
  addingTech,


});

export default withRouter(
  connect(
    mapStateToProps,
    {getTech, deleteTech, updateTech, addTech}
  )(TechItemlist)
);

