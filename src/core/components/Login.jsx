import React, { Component } from 'react';

export class Login extends Component {
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
            <input type="submit" value="Submit" />
          </form>

        );
      }
}