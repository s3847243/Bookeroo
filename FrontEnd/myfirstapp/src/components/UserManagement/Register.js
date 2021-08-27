import React, { Component } from "react";
import { createNewUser } from "../../actions/securityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class Register extends Component {
    constructor(){
        super();

    this.state = {
      username: "",
      fullName: "",
      password: "",
      confirmPassword: "",
      errors: {},
      isBusiness: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
      if (nextProps.errors){
          this.setState ({
              errors: nextProps.errors
          });

      }
  }

  onSubmit(e) {
    console.log("onsubmit");
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      fullName: this.state.fullName,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    
    console.log("this.props.createNewUser", createNewUser)
    console.log(newUser);
    createNewUser(newUser, this.props.history);
  }

  handleUserChange(e) {
    const businessSelected = e.target.value === "Public User" ? false : true;
    const abnFeild = document.getElementById("abn-field");
    if(businessSelected) {
      abnFeild.removeAttribute("disabled")
    } 
    else 
    {
      abnFeild.setAttribute("disabled", "");
      abnFeild.value = "";
    } 
    
    this.setState({
      isBusiness: businessSelected
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    }

  render() {
      const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your Account</p>
              <form onSubmit={this.onSubmit} >
                <div className="form-group">
                  <input
                    type="text"
                    className= {classnames("form-control form-control-lg", {
                        "is-invalid": errors.name
                    }) }
                    placeholder="Name"
                    name="fullName"
                    value= {this.state.name}
                    onChange = {this.onChange}
                    required
                  />
                  {errors.name && (
                      <div className= "invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="username"
                    onChange = {this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    onChange = {this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    onChange = {this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input type="radio" value="Public User" name="user-type" onChange={e => this.handleUserChange(e)} required/> Public User <br></br>
                  <input type="radio" value="Business User" name="user-type" onChange={e => this.handleUserChange(e)} required/> Business User
                </div>

                <div className="form-group">
                  <input
                    id= "abn-field"
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Your ABN"
                    name="abn"
                    disabled
                  />
                </div>

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;