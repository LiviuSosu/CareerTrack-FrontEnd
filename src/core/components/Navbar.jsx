import React from 'react';
import { connect } from "react-redux";
import { Route, Link } from 'react-router-dom';
import { HomePage } from './HomePage/HomePage';
import { Login } from './Login';
import { PrivateRoute } from './PrivateRoute';
import { history, Role } from '../../helpers/index';
import { authenticationService } from '../../sagas/api-saga';
import { withRouter } from 'react-router-dom';
import { LogoutModel } from '../../Models/Users/LogoutModel';
// import config from '../../config/config.Developlent.json';
import { logoutUser, loginUser } from "../../actions/users";
import { Articles } from './Articles/Articles'

class Navbar extends React.Component {

  loggedUser = null;

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAdmin: false,
      logoutResponse: null,
      loginResponse: null
    };

    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    // authenticationService.currentUser.subscribe(x => this.setState({
    //   currentUser: x,
    //   isAdmin: x && x.role === Role.Admin
    // }));
  }

  logout(event) {
    let logoutModel = new LogoutModel("some token");
   // this.props.logoutUser(`${config.baseUrl}Users/Logout`, logoutModel);
    this.loggedUser = null;
    window.location.reload();
    event.preventDefault();
  }

  render() {
    const { currentUser, logoutResponse, loginResponse } = this.state;
    this.loggedUser = JSON.parse(localStorage.getItem('currentUser'));
    //https://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example
    return (
      <div>
        {
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link">Home</Link>
              {
                this.loggedUser &&
                <Link to="/Articles" className="nav-item nav-link">Articles</Link>
              }
              {
                this.loggedUser &&
                <Link to="/" onClick={this.logout} className="nav-item nav-link">Logout</Link>
              }
              {(this.loggedUser == null) &&
                <Link to="/Login" className="nav-item nav-link">Login</Link>
              }
            </div>
          </nav>
        }
        {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
              <Link to="/" className="nav-item nav-link">Home</Link>
              <Link to="/Login"  className="nav-item nav-link">Login</Link> 
            </div>
          </nav> */}
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <Route exact path="/" component={HomePage} />
                <Route path="/Login" component={Login} />
                <PrivateRoute path="/Articles" component={Articles} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    logoutResponse: state.logoutResponse,
    loginResponse: state.loginResponse
  };
}

export default withRouter(connect(mapStateToProps, { logoutUser })(Navbar));