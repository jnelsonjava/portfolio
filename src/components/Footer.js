import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(props) {

  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          {/* <Col className="p-0" md={3} sm={12}>
            <p>Jack Nelson</p>
          </Col> */}
          <Col className="p-0 d-flex justify-content-left" md={3} sm={12}>
          <a href={props.assets.github.link} target="_blank" rel="noopener noreferrer"><img className="social-icon img-thumbnail mx-auto" src={props.assets.github.icon} alt="github icon" /></a>
          <a href={props.assets.linkedin.link} target="_blank" rel="noopener noreferrer"><img className="social-icon img-thumbnail mx-auto" src={props.assets.linkedin.icon} alt="linkedin icon" /></a>
          <a href={props.assets.gmail.link} target="_blank" rel="noopener noreferrer"><img className="social-icon img-thumbnail mx-auto" src={props.assets.gmail.icon} alt="gmail icon" /></a>
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            <p>Built using React.js<br/>Special thanks to <a href="https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw">DevGrub</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;