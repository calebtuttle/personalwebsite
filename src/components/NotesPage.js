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
              <p>
                These are just notes. Sometimes I think thoughts, don't have time to develop them, 
                but need an outlet to prevent them from nagging me. This is that outlet. I've made 
                these public, so they are more than the scratching of a psychological itch. Their 
                secondary purpose (which very well might never be fulfilled) is to potentially offer 
                a novel point of view. In other words, if someone were to read one of these entries 
                and quietly think, "Hm, interesting," these notes can be considered a success, in 
                the secondary sense.
              </p>
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
