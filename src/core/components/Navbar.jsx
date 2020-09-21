import React, { Component } from 'react';
import { connect } from "react-redux";
import { getData } from "../../actions/index";

export class Navbar extends Component {
    componentDidMount() {
        this.props.getData("https://api.valentinog.com/api/link/");
      }

      render() {
        return (
          <ul>
            {this.props.articles.map(el => (
              <li key={el.id}>{el.title}</li>
            ))}
          </ul>
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