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
        'username': 'a',
         'password': 'b',
        'email': 'a@a.b'
        })

      })
      .then(function(response) {
        return response.json()
      }).then(function(body) {
        console.log(body);
      });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="username" ref="name"/>
        <input type="text" placeholder="email" ref="email"/>
        <input type="password" placeholder="password" ref="password"/>


        <input type="submit" />
      </form>
    );
  }
}

ReactDOM.render(<Example/>, document.getElementById('react'));