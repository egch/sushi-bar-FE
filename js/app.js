/**
 * Super simple client side application that mounts React
 *
 */

const React = require('react');
const ReactDOM = require('react-dom');

class Example extends React.Component {
  constructor() {
    super();
    this.state = { user: {} };
    this.onSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var self = this;
    fetch('http://localhost:8080/registration', {
        method: 'POST',
        headers: new Headers({
                        'Content-Type': 'application/json'
                    }),

        body: JSON.stringify({
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        })
    }).then(function(body) {
        console.log(body);
    });
  }
  render() {
    return (
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label for="username">Username:</label>
                <input type="text" className="form-control" id="username"/>
            </div>
            <div className="form-group">
                <label for="email">Email address:</label>
                <input type="email" className="form-control" id="email"/>
            </div>
            <div className="form-group">
                <label for="password">Password:</label>
                <input type="password" className="form-control" id="password"/>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
        </form>
    );
  }
}

ReactDOM.render(<Example/>, document.getElementById('form'));