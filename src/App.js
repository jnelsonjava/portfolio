import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import githubIcon from './assets/images/github-icon.png';
import linkedinIcon from './assets/images/linkedin-icon.png';
import gmailIcon from './assets/images/gmail-icon.png';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Jack Nelson Portfolio',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Jack!',
        subTitle: 'A collection of projects',
        text: 'Welcome! Please peruse some of my work. If you have any feedback or would like to get in touch, head on over to the contact page. Enjoy!'
      },
      about: {
        title: 'A bit about myself'
      },
      contact: {
        title: 'I\'d love to hear from you!'
      },
      footer: {
        github: {
          icon: githubIcon,
          link: 'https://github.com/jnelsonjava',
        },
        linkedin: {
          icon: linkedinIcon,
          link: 'https://www.linkedin.com/in/jnelsonjava/',
        },
        gmail: {
          icon: gmailIcon,
          link: 'jnelson.java@gmail.com',
        }
      }
    }
  }

  render(){
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Jack Nelson<br/>Software Developer - Java | JavaScript | Python</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer assets={this.state.footer} />

        </Container>
      </Router>
    );
  }
}

export default App;
