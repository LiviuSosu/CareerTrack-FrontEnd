// import React from 'react';
// import { LoginModel } from '../../Models/Users/LoginModel';
// import jwt_decode from "jwt-decode";
// import { connect } from "react-redux";
// import { loginUser, hideErrorMessage } from "../../actions/users";
// import { history, Role } from '../../helpers/index';
// // import config from '../../config/config.Developlent.json';

// import { userActions } from '../../actions';

// class Login extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { username: '', password: '', submitted: false, currentUser: null, isAdmin: false };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e){
//     const {name, value} = e.target;
//     this.setState({[name]: value});
//   }

//   handleSubmit(e) {
//     e.preventDefault();

//     this.setState({ submitted: true });
//     const { username, password } = this.state;
//     if (username && password) {
//         this.props.login(username, password);
//     }
// }

// render() {
//   const { loggingIn } = this.props;
//   const { username, password, submitted } = this.state;

//   console.log(this.loggingIn)
//   return(
//     <div className="col-md-6 col-md-offset-3">
//           <h2>Login</h2>
//           <form name="form" onSubmit={this.handleSubmit}>
//             <div className={'form-group' + (submitted && !username ? ' has-error': '')}>
//               <label htmlFor="username">Username</label>
//               <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
//               {
//                 submitted && !username && 
//                 <div className="help-block">Username is required</div>
//               }
//             </div>

//             <div className={'form-group' + (submitted && !password) ? ' has-error':''}>
//               <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
//               {
//                 submitted && !password &&
//                 <div className="help-block">Password is required</div>
//               }
//             </div>
//             <div className="form-group">
//               <button className="btn btn-primary">Login</button>
//               {
//                 loggingIn &&
//                   <div>loading ... y</div>
//               }
//             </div>
//           </form>
//     </div>
//   )
// }
// }

// function mapState(state) {
//   const { loggingIn } = state.authentication;
//   return { loggingIn };
// }

// const actionCreators = {
//   login: userActions.login,
//   //logout: userActions.logout
// };

// //export default connect(mapState, actionCreators)(Login);

// const connectedLoginPage = connect(mapState, actionCreators)(Login);
// export { connectedLoginPage as Login };

// // const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
// // export { connectedLoginPage as LoginPage };