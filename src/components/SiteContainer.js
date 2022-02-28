import React from 'react';
import { Grid, Row, Col } from 'rsuite';


function SiteContainer(props) {
  return (
    <div >
      {/* Navbar */}
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={7}></Col>
          <Col xs={10}>
            <div>
              
            </div>
          </Col>
          <Col xs={7}>
            <div>
              
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default SiteContainer;
