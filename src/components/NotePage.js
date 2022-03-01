import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'rsuite';

import TitleBar from './TitleBar';

import TestMarkdown from '../markdown/Test.md';


function NotePage(props) {

  const [markdown, setMarkdown] = useState("");

  function getMarkdown() {
    fetch(TestMarkdown).then(response => response.text()).then(text => setMarkdown(text));
  }

  useEffect( () => {
    setMarkdown(getMarkdown())
  }, []);

  return (
    <div >
      <TitleBar pageTitle={props.title} />
      <br />
      
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={7}></Col>
          <Col xs={10}>
            <div>
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
          </Col>
          <Col xs={7}>
          </Col>
        </Row>
      </Grid> 
    </div>
  );
}


export default NotePage
