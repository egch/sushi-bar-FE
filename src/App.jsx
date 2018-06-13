import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid, Col } from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Signup from "./components/Signup";
import Message from "./components/Message";
import Navbar from './components/CustomNavbar';


class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Navbar />
                <Grid>
                    <Col xs={1} sm={10} >
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/message/:message" exact={true} component={Message} />
                    </Col>
                </Grid>
            </div>
        </Router>

    );
  }
}

export default App;
