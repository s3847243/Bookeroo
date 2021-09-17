import React, { Component } from "react";
import { createNewUser } from "../../actions/securityActions";
import * as PropTypes from 'prop-types'
import { connect } from "react-redux";
// import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      fullName: "",
      phoneNum: "",
      address: "",
      password: "",
      confirmPassword: "",
      abn: "",
      errors: {},
      isBusiness: false,
      registerError: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let abnData = this.state.isBusiness ? this.state.abn : "";
    const newUser = {
      userType: this.state.isBusiness ? "BUSINESS" : "USER",
      abn: abnData,
      phoneNum: this.state.phoneNum,
      address: this.state.address,
      username: this.state.username,
      fullName: this.state.fullName,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    
    let err = this.props.createNewUser(newUser, this.props.history);
    this.setState({registerError: err})
    console.log(this.state.registerError);
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
    // const { errors } = this.state;
    const errorMessage = this.state.registerError ? 
    <>
      <h2>Incorrect information</h2>
      <p>This error may be because of one or more of the following factors:</p>
      <ul>
        <li>Email was already used</li>
        <li>Passwords did not match</li>
        <li>Password were less than 6 characters</li>
      </ul>
    </>
    : null;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your Account</p>
              {errorMessage}
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Full Name"
                    name="fullName"
                    value={this.state.fullName}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Email Address (Username)"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Address"
                    name="address"
                    value={this.state.address}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control form-control-lg"
                    placeholder="Phone Number eg. 040..."
                    name="phoneNum"
                    value={this.state.phoneNum}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange = {this.onChange}
                    required
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
                    required
                    onChange={e => this.onChange(e)}
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
Register.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { createNewUser }
)(Register);