import React, { Component } from 'react';
import { connect } from "react-redux";
import { Router, Route, Link } from 'react-router-dom';
import { getData } from "../../actions/index";
import { loginUser } from "../../actions/users";
import { Login } from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { history } from '../../helpers/index';
import { PrivateRoute } from '../components/PrivateRoute';
import { Articles } from '../components/Articles';
import { LoginModel } from "../../Models/Users/LoginModel"

export class Navbar extends Component {
  componentDidMount() {
    this.props.getData("https://api.valentinog.com/api/link/");
    var loginDto = new LoginModel("LiviuS","SomePassword123!");
    this.props.loginUser("http://localhost:1400/api/Users/login", loginDto);

  }

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAdmin: false
    };
  }

  render() {
    const { currentUser, isAdmin } = this.state;
    return (
      <Router history={history}>
      <div>
          {currentUser &&
              <nav className="navbar navbar-expand navbar-dark bg-dark">
                  <div className="navbar-nav">
                      <Link to="/" className="nav-item nav-link">Articles</Link>
                      {/* {isAdmin && <Link to="/admin" className="nav-item nav-link">Admin</Link>}
                      <a onClick={this.logout} className="nav-item nav-link">Logout</a> */}
                  </div>
              </nav>
          }
          <div className="jumbotron">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6 offset-md-3">
                          <PrivateRoute exact path="/" component={Articles} />
                          {/* <PrivateRoute path="/admin" roles={[Role.Admin]} component={AdminPage} />
                          <Route path="/login" component={LoginPage} /> */}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </Router>
      // <Router history={history}>
      //   <div>
      //               {currentUser &&
      //                  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      //                       <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //                       <ul class="navbar-nav mr-auto">
      //                       <li class="nav-item">
      //                           <Link to="/" className="nav-item nav-link">Articles</Link>
      //                           </li>
      //                       </ul>
      //                       </div>
      //                   </nav>
      //               }
      //               <div className="navbar navbar-expand-lg navbar-light bg-light">
      //                   <div className="container">
      //                       <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //                       <ul class="navbar-nav mr-auto">
      //                         <li>
      //                               <PrivateRoute exact path="/" component={Articles} />
      //                               </li>
      //                           </ul>
      //                       </div>
      //                   </div>
      //               </div>
      //           </div>
      // </Router>
    );
  }
}


function mapStateToProps(state) {
    console.log(state);
  return {
    articles: state.remoteArticles.slice(0, 100),
  
  };
}

export default connect(mapStateToProps, { getData, loginUser })(Navbar);

// function Navbar() {



//     return (
//         <p>this is a Navbar</p>
//     );
// }

// export default Navbar;

// import React, { Component } from 'react';
// import { connect } from "react-redux";
// import { getData } from "../../actions/index";

// export class Navbar extends Component {
//     componentDidMount() {
//         this.props.getData("https://api.valentinog.com/api/link/");
//       }

//       render() {
//         return (
//           <ul>
//             {this.props.articles.map(el => (
//               <li key={el.id}>{el.title}</li>
//             ))}
//           </ul>
//         );
//       }
// }


// function mapStateToProps(state) {
//     return {
//       articles: state.remoteArticles.slice(0, 100)
//     };
//   }

// export default connect(mapStateToProps, { getData })(Navbar);
