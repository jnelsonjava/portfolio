import React from 'react';

import { Container, Row } from 'react-bootstrap';

import Card from '../components/Card';
import respiteCard from '../assets/images/respite-card.png';
import myCareerCard from '../assets/images/mycareer-card.png';
import snipeHuntCard from '../assets/images/snipehunt-card.png';


class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Respite',
          subTitle: 'An online art-crawl for design inspiration pairing APIs for museums and image analysis. Built in VSCode using JavaScript, HTML with EJS templating, and CSS. Deployed on Heroku using Express and PostgreSQL.',
          imgSrc: respiteCard,
          link: 'http://www.respitehex.com/',
          selected: false
        },
        {
          id: 1,
          title: 'My Career Assistant',
          subTitle: 'A web hosted organizational tool for job-seekers. Built in IntelliJ with Java. Uses SpringMVC with Spring Security, Thymeleaf HTML templating, and JPARepository connecting to a PostgreSQL database. Styling with Bootstrap CSS. Deployed on Heroku. Includes a search through a job posting API as well as features for users to track job applications, contacts, and notes.',
          imgSrc: myCareerCard,
          link: 'https://jobs-in-the-air.herokuapp.com/',
          selected: false
        },
        {
          id: 2,
          title: 'Snipe Hunt',
          subTitle: 'A fun, interactive Android app for creating and sharing scavenger hunts. Built in Android Studio with Java. Utilizes AWS Amplify to integrate DynamoDB and S3 for persistence and storage. Features a local RoomDB for offline scavenging. Implements Google Firebase for SMS deep-linking.',
          imgSrc: snipeHuntCard,
          link: 'https://github.com/Cinnamon-Toast-Crunch/ScavengerHunt',
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