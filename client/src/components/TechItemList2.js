import React, { Component } from 'react';
import './App.css';

import Loader from 'react-loader-spinner';

import {getTech, deleteTech, updateTech, addTech} from '../actions';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
// import { FaBeer } from 'react-icons/fa';
//import AddTechForm from './AddTechForm';
// import axios from "axios";
;
class TechItemlist2 extends Component {
  state = {
    name: '',
    user_id: localStorage.getItem("user_id"),
  //  user_id: 23,
    category: '',
    description: '',
    picture: "https://www.lightwave3d.com/static/media/uploads/news/louis-du-mont-tedstech/louis-du-mont-tedstech-banner.jpg",
    cost: '',
  //  availability: true,
   availability: false,
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
    //   this.setState({newTodo: e.target.value})
  };

  handleSubmit = e => {
    const {name, user_id, category, picture, description, cost, availability} = this.state;
    e.preventDefault();

    // must fill in ALL fields !!!
    if(name && category && description && category && cost ) {
      this.props.addTech({name, user_id, category, picture, description, cost, availability});
      // this.props.getTech();
      this.setState({
        name: '',
        category: '',
        description: '',
        picture: "https://www.lightwave3d.com/static/media/uploads/news/louis-du-mont-tedstech/louis-du-mont-tedstech-banner.jpg",
        cost: '',
        availability: false,
      });
    }

  };






  componentDidMount() {
    this.props.getTech();
  }

  // handlers


  handleDelete = (e, id) => {
    console.log(">>>>>>>>>>>>>>>>>>> deleting");
    e.preventDefault();
    this.props.deleteTech(id);
  };


  /*
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
  */


  handleUpdate  = (e, id, tech) => {

    //   const {name, user_id, category, picture, description, cost, availability} = this.state;


    e.preventDefault();
    this.props.updateTech(id, tech);
  };



// <button className = "renterButton" > Rent Item </button>

  render() {

    console.log("HEY");

    return (
      <div className = "techItemsList-container">



        <div className = "addTechItem-container">
          <form
            className = "addTechItemForm"
            onSubmit = {this.handleSubmit}
          >

            <div className = "buttonContainer">
              <button
                className = "addTechItemButton"
              >Add some "NEW" Tech !!!
              </button>
            </div>

            <div className = "boxy">

              <div className = "techFormInputs">
                <input
                  className= "addInputFieldName"
                  value = {this.state.name}
                  name = "name"
                  type = "text"
                  placeholder = "name"
                  onChange={this.handleChange}
                />
                <input
                  className= "addInputField"
                  value = {this.state.category}
                  name = "category"
                  type = "text"
                  placeholder = "category"
                  onChange={this.handleChange}
                />

                <input
                  className= "addInputField"
                  value = {this.state.cost}
                  name = "cost"
                  type = "text"
                  placeholder = "cost"
                  onChange={this.handleChange}
                />
              </div>

              <div className= "addTextAreaField" >
              <textarea
                value = {this.state.picture}
                name = "picture"
                placeholder = "picture"
                onChange={this.handleChange}
              />
              </div>

              <div className = "addTextAreaField">
               <textarea
                 value = {this.state.description}
                 name = "description"
                 wrap="hard"
                 placeholder = "description"
                 onChange={this.handleChange}
               />
              </div>
            </div>

          </form>

        </div>





        {this.props.techItems.fetchingData?
          <Loader className = "section" type="Rings" color="deeppink" height="260" width="280" />
          :
          <h3 className = "techTitle"> TechItems for Rent !</h3>
        }

        {this.props.techItems.techItems.map( (techItem, id ) => (
          <div className = "techItem-container"   key = {id}       >


            <div className = "buttons-container">
              {Number(localStorage.getItem('user_id')) === techItem.user_id
                ? <button
                  onClick =  { (e) => this.handleDelete(e, techItem.id)}
                  className = "ownerButton"> Delete Item </button>

                : techItem.availability
                  ? <h3 className = "borderFormat avail"> Available </h3>
                  : <h3 className = "borderFormat rented"> Rented </h3>
              }

              {Number(localStorage.getItem('user_id')) !== techItem.user_id &&
              techItem.availability
                ? <button
                  className = "renterButton"
                  onClick = {() => alert(`heyyyyy ${techItem.user}, I want to rent this !!!`)}
                > Rent Item

                </button>
                : null
              }

              {Number(localStorage.getItem('user_id')) === techItem.user_id
                ? <button
                  onClick = { (e) => this.handleUpdate(techItem.id, techItem)}
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
          </div>   // end of techItem-container



        ))}






      </div>

    )
  }
}


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

  )(TechItemlist2)

);