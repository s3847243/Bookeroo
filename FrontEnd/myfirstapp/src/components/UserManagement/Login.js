import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { login } from "../../actions/securityActions";

class Login extends Component {
  constructor(){
    super();
    this.state = {
    username: "",
    password: "",
    errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
      if (this.props.security.validToken) {
        this.props.history.push("/dashboard");
      }
      
    }

    componentWillReceiveProps(nextProps){
      if (nextProps.security.validToken) {
        this.props.history.push("/dashboard");
      }
      if (nextProps.errors){
          this.setState ({
              errors: nextProps.errors
          });

      }
    }

    onSubmit(e) {
      console.log("onsubmit");
      e.preventDefault();
      const credentials = {
        username: this.state.username,
        password: this.state.password,
      };

      console.log("this.props.createNewUser", login)
      console.log(credentials);
      login(credentials, this.props.history);
    }

    onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    }

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <form onSubmit = {this.onSubmit}>
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
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } 
}
Login.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  security: state.security,
  errors: state.errors
});

export default connect( mapStateToProps,{ login })(Login);