import React from 'react';
import { connect } from "react-redux";
import { Route, Link } from 'react-router-dom';
import { getData } from "../../actions/index";
import { Articles } from './Articles/Articles';
import { HomePage } from './HomePage/HomePage';
//import { LoginModel } from '../../Models/Users/LoginModel';
import { loginUser } from "../../actions/users";
import { Login } from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { history, Role } from '../../helpers/index';
import { PrivateRoute } from '../components/PrivateRoute';
import {authenticationService} from '../../sagas/api-saga';
import jwt_decode from "jwt-decode";
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAdmin: false,
      loginResponse: null
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({
        currentUser: x,
        isAdmin: x && x.role === Role.Admin
    }));

    // let loginModel = new LoginModel("admin2","Password@123")
    // this.props.loginUser("http://localhost:1400/api/Users/login",loginModel);
  }

  logout() {
    authenticationService.logout();
    history.push('/login');
  }

  render() {
    const { currentUser, isAdmin, loginResponse } = this.state;
    console.log(this.state.currentUser);
    return (
        <div>
          {
            currentUser &&
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <div className="navbar-nav">
                <Link to="/" className="nav-item nav-link">Home</Link>
                <Link to="/Articles" className="nav-item nav-link">Articles</Link>
                <a onClick={this.logout} >Logout</a> 
              </div>
            </nav>
          }
          <div className="jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <Route exact path="/" component={HomePage} />
                  <Route path="/Login" component={Login} />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}


function mapStateToProps(state) {
    var token = state.loginResponse.token;
    if(token!==undefined)
    {
      var decoded = jwt_decode(token); 
      if(decoded.roles==="Admin"){
        state.isAdmin = true;
      } 
    }


  return {
     loginResponse: state.loginResponse
  };
}

export default withRouter(connect(mapStateToProps, { getData, loginUser })(Navbar));