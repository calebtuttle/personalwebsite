import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'rsuite';

import TitleBar from './TitleBar';


function NotesPage() {
  return (
    <div >
      <TitleBar pageTitle="Notes" />
      <br />
      
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={7}></Col>
          <Col xs={10}>
            <div>
              TODO...
              {/* <Link to="/notes" ><h5>todo...</h5></Link>  */}
            </div>
          </Col>
          <Col xs={7}>
          </Col>
        </Row>
      </Grid> 
    </div>
  );
}


export default NotesPage;
