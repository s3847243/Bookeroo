import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import { connect } from "react-redux";
import { logout } from "../../actions/securityActions";

 class Header extends Component {

    onLogout(e) {
        console.log("Logging out, " , localStorage.jwtToken);
        logout();
        console.log("Post logging out, ", localStorage.jwtToken);
        window.location.href = "/";
    }

    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
            <div className="container">
                <a className="navbar-brand" href="/">
                    Person Management Tool
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon" />
                </button>
    
                <div className="collapse navbar-collapse" id="mobile-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard">
                                Dashboard
                            </a>
                        </li>
                    </ul>
                    
                    <ul className="navbar-nav ml-auto">
                    {
                        localStorage.jwtToken ? 

                        <li className="nav-item">
                            <a className="nav-link" href="/" onClick={this.onLogout}>
                                Logout
                            </a>
                        </li>
                        : 
                        <>
                        <li className="nav-item">
                            <a className="nav-link " href="/register">
                                Sign Up
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">
                                Login
                            </a>
                        </li>
                        </>
                    }
                        
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">
                                About
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        <nav>
            <navDropdown title = "UserName">

            </navDropdown>
        </nav>
            </div>
        )
    }
}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
    security: state.security,
  errors: state.errors
});

export default connect(
mapStateToProps,
{ logout }
)(Header);

