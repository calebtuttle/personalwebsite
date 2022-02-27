import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'rsuite';

const headerStyles = {
  padding: 18,
  paddingLeft: 0,
  height: 46,
  fontSize: 24,
  whiteSpace: 'nowrap',
  overflow: 'hidden'
};

function TitleBar() {
  return (
    <div >
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={6}></Col>
          <Col xs={12}>
            <div style={headerStyles}>
              <Link to="/" style={{color: "#888"}}>Caleb Tuttle</Link>
            </div>
          </Col>
          <Col xs={6}></Col>
        </Row>
      </Grid>
      <hr />
    </div>
  );
}

export default TitleBar;
