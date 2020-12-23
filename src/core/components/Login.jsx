import React, { Component } from 'react';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
  }

    render() {
        return (
            <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Password:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" onChange={this.handleChange}/>
          </form>

        );
      }
}