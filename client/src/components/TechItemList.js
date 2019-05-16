import React, { Component } from 'react';
import './App.css';

import Loader from 'react-loader-spinner';
import AddTechForm from './AddTechForm';


import { getTech, deleteTech } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
// import { FaBeer } from 'react-icons/fa';

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
  handleDelete = (e, id) => {
    e.preventDefault();
    this.props.deleteTech(id);

  };

  handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("username");
  };


  render() {

    console.log("HEY");

    return (
      <div className = "techItemsListPage">

        {this.props.techItems.fetchingData ?
          <Loader className="section" type="Rings" color="deeppink" height="360" width="380" />
          :
          <div className = "navbar-container">
            <div className = "userNameHere">
              <h5> username HERE!!  </h5>
            </div>

            <div className = "searchText">
                <input
                  type="text"
                  name="tech"
                  placeholder="search for used tech!"
                />

            </div>

            <div className = "logoutButton-container">
              <button
                className = "logoutButton"
                onClick = { () => this.handleLogout()}


              > Logout </button>


            </div>



          </div>

        }


          <AddTechForm/>






        <div className = "techItemsList-container">
          <h3 className = "title"> TechItems for Rent !</h3>

          {this.props.techItems.techItems.map((techItem, id) => (
            <div key={id}
              style={{
                border: "1px solid red",
                margin: "2px",
                width: "30%",
              }}     >

              <div className="buttons-container">
                {Number(localStorage.getItem('user_id')) === techItem.user_id
                  ? <button
                    className="ownerButton"
                    onClick = { (e) => this.handleDelete(e, techItem.id)}


                    > Delete Item </button>

                  : techItem.availability
                    ? <h3 className="borderFormat avail"> Available </h3>
                    : <h3 className="borderFormat rented"> Rented </h3>
                }


                {Number(localStorage.getItem('user_id')) !== techItem.user_id
                  ? <button className="renterButton" > Rent Item </button>
                  : null
                }


                {Number(localStorage.getItem('user_id')) === techItem.user_id
                  ? <button className="ownerButton"> Update Item </button>
                  : null
                }
              </div>




              <div className = "img-container">
                <img className = "img_item"
                  src =  {techItem.picture} alt = "alt-img"

                />
              </div>


              <h3 className="borderFormat"> Owner: {techItem.user} </h3>
              <h4 className="borderFormat" >ID: {techItem.user_id}</h4>
              <h4 className="borderFormat"  > {techItem.name} </h4>
              <h4 className="borderFormat" > Category: {techItem.category} </h4>

              <h4 className="borderFormat"> Cost: ${techItem.cost} </h4>
              <h4 className="borderFormat"> Availability: {techItem.availability.toString()} </h4>
              <h4 className="borderFormat" style={{ fontSize: "12px" }}>  Description: {techItem.description} </h4>


            </div>
          ))}

        </div>


      </div>

    )
  }
}


const mapStateToProps = ({ techItems, fetchingData, addingTech, deletingTech }) => ({
  techItems,
  fetchingData,
  addingTech,
  deletingTech,




});

export default withRouter(
  connect(
    mapStateToProps,
    { getTech, deleteTech }

  )(TechItemlist)

);
