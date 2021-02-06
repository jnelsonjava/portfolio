import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero'

function AboutPage(props) {

  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>Hi! I'm Jack. I do Java. This is some placeholder text though.</p>
      </Content>
    </div>
  );

}

export default AboutPage;