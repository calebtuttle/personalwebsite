import React from 'react';
import { Grid, Row, Col } from 'rsuite';

import TitleBar from './TitleBar';


function Home() {
  return (
    <div >
      <TitleBar />
      
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={6}></Col>
          <Col xs={12}>
            <div style={{ color: '#333' }}>
              <h3>Home</h3>
            </div>
          </Col>
          <Col xs={6}></Col>
        </Row>
      </Grid>
          
    </div>
  );
}


export default Home;
