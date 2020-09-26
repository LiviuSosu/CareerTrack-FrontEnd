import React, { Component } from 'react';
import { connect } from "react-redux";
import { Router, Route} from 'react-router-dom';
import { getData } from "../../actions/index";
import { Login } from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { history } from '../../helpers/index';
import { PrivateRoute } from '../components/PrivateRoute';
import { Articles } from '../components/Articles';

export class Navbar extends Component {
    componentDidMount() {
        this.props.getData("https://api.valentinog.com/api/link/");
      }

      render() {
        return (
          <Router history={history}>
           <div className="jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                <PrivateRoute exact path="/" component={Articles} />
                                    <PrivateRoute path="/" component={Login} />

                                </div>
                            </div>
                        </div>
                    </div>
          </Router>
        );
      }
}


function mapStateToProps(state) {
    return {
      articles: state.remoteArticles.slice(0, 100)
    };
  }

export default connect(mapStateToProps, { getData })(Navbar);

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
