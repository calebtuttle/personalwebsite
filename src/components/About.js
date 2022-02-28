import React from 'react';
import { Grid, Row, Col } from 'rsuite';

import TitleBar from './TitleBar';


function About() {
  return (
    <div >
      <TitleBar pageTitle="About" />
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={7}></Col>
          <Col xs={10}>

            <img src="../../Headshot.JPG" alt="headshot" width="100" height="100" />

            <br />
            <br />

            <div style={{ color: '#000' }}>
              <p>
                Hello! I’m Caleb. I hold a bachelor’s in Computer Science and 
                Philosophy. I’m a software developer and technical writer in the Web3 and DeSci space.
              </p>
              <p>
                Twitter: <a href="https://twitter.com/calebtuttle9" target="_blank">https://twitter.com/calebtuttle9</a>
              </p>
              <p>
                GitHub: <a href="https://github.com/calebtuttle" target="_blank">https://github.com/calebtuttle</a>
              </p>
              <p>
                (<a href="https://soundcloud.com/introic" target="_blank">I also used to make cheesy music</a>)
              </p>
            </div>
          </Col>
          <Col xs={7}></Col>
        </Row>
      </Grid>

    </div>
  );
}


export default About;
