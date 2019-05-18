import React from 'react';
import './addTechForm.css';

import {getTech, deleteTech, updateTech, addTech} from '../actions';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";


//     picture: "https://zdnet2.cbsistatic.com/hub/i/r/2018/01/26/b4fe5bfc-6e3b-4575-b8db-f06caadc1a71/thumbnail/770x578/5f810055799b727df363a6e0cfcece38/tech-transport-future-intro.jpg",


import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalUpdateTech extends React.Component {

  /*
  constructor(props) {

    console.log(">>>>>  modal props !!!", props);
    super(props);
    this.state = {
      modal: false,
      techItem: this.props.techItem.techItem,

    };

    this.handleToggle = this.handleToggle.bind(this);

  }

*/

  state = {
    modal: false,
    techItem: this.props.techItem,

  };


  handleChange = e => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
    //   this.setState({newTodo: e.target.value})
  };


  handleUpdate  = (e, id, tech) => {

       const {name, user_id, category, picture, description, cost, availability} = this.state.techItem;


    e.preventDefault();
    this.props.updateTech(id, tech);
  };






  handleToggle = () => {

    this.setState( {
      modal: !this.state.modal,

    });

  };

  render() {

     const {name, user_id, category, picture, description, cost, availability} = this.state.techItem;

    return (




      <div>


        <Button color="danger" onClick={this.handleToggle}> Update  </Button>
        <Modal isOpen={this.state.modal}>
          <ModalHeader toggle = {this.handleToggle} > Modal Header Stuff</ModalHeader>
          <ModalBody>



            <div >
              <form

                onSubmit = {this.handleUpdate}
              >

                <div >

                  <div >
                    <input

                      value = {name}
                      name = "name"
                      type = "text"
                      placeholder = "name"
                      onChange={this.handleChange}
                    />
                    <input
                      value = {category}
                      name = "category"
                      type = "text"
                      placeholder = "category"
                      onChange={this.handleChange}
                    />

                    <input
                      value = {cost}
                      name = "cost"
                      type = "text"
                      placeholder = "cost"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div >
                    <textarea
                      value = {picture}
                      name = "picture"
                      placeholder = "picture"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                     <textarea
                       value = {description}
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