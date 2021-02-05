import React from 'react';

import Card from '../components/Card';

import placeholder from '../assets/images/placeholder.JPG';
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Proj 1',
          subTitle: 'Project 1 Description...',
          imgSrc: placeholder,
          link: 'http://www.jnelsonjava.com/',
          selected: false
        },
        {
          id: 1,
          title: 'Proj 2',
          subTitle: 'Project 2 Description...',
          imgSrc: placeholder,
          link: 'http://www.jnelsonjava.com/',
          selected: false
        },
        {
          id: 2,
          title: 'Proj 3',
          subTitle: 'Project 3 Description...',
          imgSrc: placeholder,
          link: 'http://www.jnelsonjava.com/',
          selected: false
        },
      ]
    }
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = !items[id].selected;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  }

  makeItems = (items) => {
    return items.map(item => {
      return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
  }

  render() {
    return(
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
  
}

export default Carousel;