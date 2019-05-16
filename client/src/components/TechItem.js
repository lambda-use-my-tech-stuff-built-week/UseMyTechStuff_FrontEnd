import React from 'react';

import './App.css';



function TechItem(techItem, id) {


  return (
        <div key={id}
             style={{
               border: "1px solid red",
               margin: "2px",
               width: "30%",
             }}
        >

          <div className="buttons-container">
            {Number(localStorage.getItem('user_id')) === techItem.user_id
              ? <button
                className="ownerButton"
                onClick = { (e) => this.props.handleDelete( e, techItem.id)}


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


  )


}

export default TechItem;
