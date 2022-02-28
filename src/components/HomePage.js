import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'rsuite';

import TitleBar from './TitleBar';


function HomePage() {
  return (
    <div >
      <TitleBar pageTitle="Home" />
      <br />
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={7}></Col>
          <Col xs={10}>
            <div>
              <Link to="/notes" ><h5>Notes</h5></Link> 
            </div>
            <br />
            <div>
              <Link to="/external" ><h5>Articles Published Externally</h5></Link> 
            </div>
          </Col>
          <Col xs={7}>
          </Col>
        </Row>
      </Grid>      
    </div>
  );
}


export default HomePage;
