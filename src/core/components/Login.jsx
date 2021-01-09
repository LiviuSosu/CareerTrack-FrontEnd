import React from 'react';
import { LoginModel } from '../../Models/Users/LoginModel';
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import { loginUser } from "../../actions/users";
import { history, Role } from '../../helpers/index';
import { authenticationService } from '../../sagas/api-saga';
import config from '../../config/config.Developlent.json';


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '', currentUser: null, isAdmin: false, loginResponse: null };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // authenticationService.currentUser.subscribe(x => this.setState({
    //   currentUser: x,
    //   isAdmin: x && x.role === Role.Admin
    // }));
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    let loginModel = new LoginModel(this.state.username,this.state.password)
    //let loginModel = new LoginModel("admin2", "Password@123") //TODO: delete this line and uncomment the line above 
    this.props.loginUser(`${config.baseUrl}Users/login`, loginModel);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className ="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" value={this.state.username} onChange={this.handleUsernameChange} />
        </div>
        <div className ="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </div>
        <button type="submit" className="btn btn-primary">Log in</button>
      </form>

    );
  }
}

function mapStateToProps(state) {
  if(state.loginResponse.token!=null)
  {
     history.push("/");
     window.location.reload();
  }
  var token = state.loginResponse.token;
  if (token !== undefined) {
    var decoded = jwt_decode(token);
    if (decoded.roles === "Admin") {
      state.isAdmin = true;
    }
  }
  return {
    loginResponse: state.loginResponse
  };
}

const mapDispatchToProps = { loginUser }

 export default connect(mapStateToProps, mapDispatchToProps)(Login);