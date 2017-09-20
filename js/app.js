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

      })
      .then(function(response) {
        console.log('waiting for the answer...')
        return response.json()
      }).then(function(body) {
        console.log(body);
      });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="username" id="username"/>
        <input type="text" placeholder="email" id="email"/>
        <input type="password" placeholder="password" id="password"/>


        <input type="submit" />
      </form>
    );
  }
}

ReactDOM.render(<Example/>, document.getElementById('react'));