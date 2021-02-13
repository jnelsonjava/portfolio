import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero'

function AboutPage(props) {

  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>
          I'm Jack. I'm a Software Developer, primarily in Java.<br/><br/>

          I picked up Python and SQL in my previous career as a way to automate some of my daily tasks. Pretty soon I was addicted to writing scripts and realized I needed to go further. So I enrolled in a Bootcamp where I completed coursework for Full-Stack Development with JavaScript. After getting confident with building a front-end and deploying Node.js servers, I completed a certificate in Advanced Software Development in Java. This brought me up to speed on deploying APIs with Spring and Android Development.<br/><br/>

          Since then I've been picking up any new thing I can find. This portfolio was a way to get used to React. And I've been working on a C++ project using the Arduino platform to gather data and send it to an Android app in Protocol Buffers.<br/><br/>
          
          I enjoy picking up new projects so feel free to reach out to me if you've got something going! And thank you for taking the time to get to know me. Hope to connect with you soon.
        </p>
      </Content>
    </div>
  );

}

export default AboutPage;