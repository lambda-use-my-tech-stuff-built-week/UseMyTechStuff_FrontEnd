import React, {Component} from 'react';
import './addTechForm.css';


import {connect} from 'react-redux';


//import {} from './actions';

class AddTechForm extends Component {
  state = {
    name: '',
    user_id: localStorage.getItem("user_id"),
    category: '',
    description: '',
    picture: "https://www.lightwave3d.com/static/media/uploads/news/louis-du-mont-tedstech/louis-du-mont-tedstech-banner.jpg",
    cost: '',
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
      this.setState({
        name: '',
        category: '',
        description: '',
  //      picture: "https://www.lightwave3d.com/static/media/uploads/news/louis-du-mont-tedstech/louis-du-mont-tedstech-banner.jpg",
        cost: '',
  //      availability: true,
      });
    }

  };


  render() {
    return (
      <div className = "addTechItem-container">
        <form
          className = "addTechItemForm"
          onSubmit = {this.handleSubmit}
        >

          <div className = "buttonContainer">

            <button
              className = "addTechItemButton"
            >Add some "NEW" Tech !!! </button>
          </div>


          <div className = "techFormInputs">
            <input
              value = {this.state.name}
              name = "name"
              type = "text"
              placeholder = "name"
              onChange={this.handleChange}
            />
            <input
              value = {this.state.category}
              name = "category"
              type = "text"
              placeholder = "category"
              onChange={this.handleChange}
            />
            <input
              value = {this.state.description}
              name = "description"
              type = "text"
              placeholder = "description"
              onChange={this.handleChange}
            />
            <input
              value = {this.state.picture}
              name = "picture"
              type = "text"
              placeholder = "picture"
              onChange={this.handleChange}
            />
            <input
              value = {this.state.cost}
              name = "cost"
              type = "text"
              placeholder = "cost"
              onChange={this.handleChange}
            />

          </div>

        </form>

      </div>

    );
  }
}

export default AddTechForm;






/*
const mapStateToProps = state => ({
  addingTech: state.addingTech,
  error: state.error,

});


export default connect(mapStateToProps, {addTech})(AddTechForm);
 */