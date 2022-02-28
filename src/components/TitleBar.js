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

function TitleBar(props) {
  return (
    <div >
      {/* Navbar */}
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={7}></Col>
          <Col xs={10}>
            <div style={headerStyles}>
              <Link to="/" style={{color: "#888"}}>Caleb Tuttle</Link>
            </div>
          </Col>
          <Col xs={7}>
            <div style={headerStyles}>
              <Link to="about" style={{color: "#888", fontSize: 20 }}>About</Link>
            </div>
          </Col>
        </Row>
      </Grid>
      <hr />

      {/* Page Title */}
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={7}></Col>
          <Col xs={10}>
            <div style={{ color: '#333' }}>
              <h3>{props.pageTitle}</h3>
            </div>
          </Col>
          <Col xs={7}></Col>
        </Row>
      </Grid>
    </div>
  );
}

export default TitleBar;
