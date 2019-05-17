import React, { Component } from 'react';
import './App.css';

import Loader from 'react-loader-spinner';

import {getTech, deleteTech, updateTech} from '../actions';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
// import { FaBeer } from 'react-icons/fa';
import AddTechForm from './AddTechForm';
import axios from "axios";
;
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

/*
  handleDelete = (e, id) => {
    console.log(">>>>>>>>>>>>>>>>>>> deleting");
    e.preventDefault();
    this.props.deleteTech(id);
  };
*/

  handleDelete = (e, id) => {
    axios
      .delete(`https://usemytechstuff.herokuapp.com/api/tech/${id}`,
        {headers: { Authorization: localStorage.getItem("token") }
        })
      .then(res => {
        console.log(res);
   //     dispatch({
   //       type: DELETE_TECH,
   //       payload: res.data
   //     });
      })
      .catch(err =>  { console.log(">>>>>>>  ERROR  delete");               // err
   //     dispatch({type: ERROR, payload: err.response});
      })

  };

  handleUpdate  = (e, id) => [
    e.preventDefault();
    this.props.deleteTech(id);
  ]



// <button className = "renterButton" > Rent Item </button>

  render() {

    console.log("HEY");

    return (
      <div
        style = { {
          border: "5px solid blue",
          width: "75%",
          backgroundColor: "ivory",
          margin: "0 auto",
          color: "black",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          padding: "50px",
        } }
      >




        <AddTechForm/>


        {this.props.techItems.fetchingData?
          <Loader className = "section" type="Rings" color="deeppink" height="260" width="280" />
          :
          <h3
            style = { {
              width: "75%",
              border: "1px solid green",
              fontSize: "40px",
              margin: "5px auto",
              color: "black",
              display: "flex",
              justifyContent: "center",
            } }
          > TechItems for Rent !</h3>
        }

        {this.props.techItems.techItems.map( (techItem, id ) => (
          <div key = {id}
               style =  {{
                 border: "1px solid red",
                 margin: "2px",
                 width: "30%",
               }}     >

            <div className = "buttons-container">
              {Number(localStorage.getItem('user_id')) === techItem.user_id
                ? <button
                  onClick =  { (e) => this.handleDelete(e, techItem.id)}
                  className = "ownerButton"> Delete Item </button>

                : techItem.availability
                  ? <h3 className = "borderFormat avail"> Available </h3>
                  : <h3 className = "borderFormat rented"> Rented </h3>
              }


              {Number(localStorage.getItem('user_id')) !== techItem.user_id
                ? <button className = "renterButton" > Rent Item </button>
                : null
              }


              {Number(localStorage.getItem('user_id')) === techItem.user_id
                ? <button
                  onClick = { (e) => this.updateTech(techItem.id)}
                  className = "ownerButton"> Update Item </button>
                : null
              }
            </div>



            <div className = "img-container">
              <img className = "img_item"
                   src =  {techItem.picture} alt = "alt-img"
              />
            </div>


            <h3 className = "borderFormat"> Owner: {techItem.user} </h3>
            <h4 className = "borderFormat" >ID: {techItem.user_id}</h4>
            <h4 className = "borderFormat"  > {techItem.name} </h4>
            <h4 className = "borderFormat" > Category: {techItem.category} </h4>

            <h4 className = "borderFormat"> Cost: ${techItem.cost} </h4>
            <h4 className = "borderFormat"> Availability: {techItem.availability.toString()} </h4>
            <h4 className = "borderFormat" style = {{fontSize: "12px"}}>  Description: {techItem.description} </h4>


          </div>
        ))}






      </div>

    )
  }
}


const mapStateToProps = ({techItems, fetchingData, deletingTech, updatingTech}) => ({
  techItems,
  fetchingData,
  deletingTech,
  updatingTech,


});

export default withRouter(
  connect(
    mapStateToProps,
    {getTech, deleteTech, updateTech}

  )(TechItemlist)

);