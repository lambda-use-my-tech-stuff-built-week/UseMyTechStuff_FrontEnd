import React from 'react';
import './addTechForm.css';

import {getTech, deleteTech, updateTech, addTech} from '../actions';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";



import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalUpdateTech extends React.Component {

  state = {
    modal: false,


    name: '',
    user_id: localStorage.getItem("user_id"),
    //   user_id: 23,
    category: '',
    description: '',
    picture: "https://zdnet2.cbsistatic.com/hub/i/r/2018/01/26/b4fe5bfc-6e3b-4575-b8db-f06caadc1a71/thumbnail/770x578/5f810055799b727df363a6e0cfcece38/tech-transport-future-intro.jpg",
    cost: '',
    //  availability: true,
    availability: true,
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
        picture: '',
        cost: '',
        availability: false,
      });
    }

  };

  handleUpdate  = (e, id, tech) => {

    //   const {name, user_id, category, picture, description, cost, availability} = this.state;


    e.preventDefault();
    this.props.updateTech(id, tech);
  };




  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Login to UseMyTechstuff !</ModalHeader>
          <ModalBody>



            <div className = "addTechItem-container">
              <form
                className = "addTechItemForm"
                onSubmit = {this.handleSubmit}
              >

                <div className = "buttonContainer">
                  <button
                    className = "addTechItemButton"
                  >UPDATE Tech !!!
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




          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
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

  )(ModalUpdateTech)

);