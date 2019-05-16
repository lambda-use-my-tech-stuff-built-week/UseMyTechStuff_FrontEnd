import React, { Component } from 'react';
import './App.css';

import Loader from 'react-loader-spinner';
import AddTechForm from './AddTechForm';
import TechItem from './TechItem';


import {getTech, deleteTech, DELETE_TECH, ERROR} from '../actions';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import axios from "axios";
// import { FaBeer } from 'react-icons/fa';

class TechItemList_broke extends Component {


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
 //   this.props.deleteTech(id);

    axios
      .delete(`https://usemytechstuff.herokuapp.com/api/tech/${id}`,
        {headers: { Authorization: localStorage.getItem("token") }
        })
      .then(res => {
        console.log(res);
      })
      .catch(err =>{                // err
       console.log(err);
      });
    this.props.getTech();

  };

  handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("username");
  };

  //    onClick = { (e) => this.handleDelete(e, techItem.id)}

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
              <TechItem
                techItem = {techItem}
                id = {id}
       //         handleDelete = {this.handleDelete}
              />
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

  )(TechItemList_broke)

);
