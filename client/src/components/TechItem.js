import React, {Component} from 'react';

import './App.css';
import {deleteTech} from "../actions";
import {connect} from 'react-redux';
import ModalUpdateTech from './ModalUpdateTech';


class TechItem extends Component {


  handleDelete = (e, id) => {
   console.log(">>>>>>>>>>>>>>>>>>> deleting");
    e.preventDefault();
    this.props.deleteTech(id);
  };


  render()  {

    const {techItem, id} = this.props;

    return (
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
            ? <ModalUpdateTech
              techItem = {techItem}
              onClick = { (e) => this.handleUpdate(e, techItem.id, techItem)}
              className = "ownerButton"> Update Item </ModalUpdateTech>
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






    )

  }


}

export default connect(
  null, {deleteTech}
)(TechItem);
