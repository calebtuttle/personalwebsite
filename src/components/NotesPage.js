import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'rsuite';

import TitleBar from './TitleBar';

const style = {
  fontSize: '1.2em'
};

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
              <br />
              <div style={style}>
                <Link to="/notes/startingToLearnAboutThePhilosophyOfScience" >I'm Starting to Learn About The Philosophy of Science</Link>
                <br /><br />
                <Link to="/notes/notesOnPracticalScience" >Notes on Practical Science</Link>
                <br /><br />
                <Link to="/notes/whatIsDeSci" >What is DeSci?</Link>
                <br /><br />
                <Link to="/notes/decisionMakingFunction" >Decision Making Function - Notes</Link>
                <br /><br />
                {/* <Link to="/notes/internalConflictAndTheInternalCommunity" >Internal Conflict and the Internal Community</Link>
                <br /><br /> */}
                <Link to="/notes/maslowsHierarchyOfNeedsAsAUtilityFunction" >Maslow's Hierarchy of Needs as a Utility Function</Link>
                <br /><br />
                {/* <Link to="/notes/notesOnFriendship" >Notes on Friendship</Link>
                <br /><br /> */}
                <h4>Analogies in Computer Science and Philosophy</h4>
                <Link to="/notes/anAnalogyBetweenKantAndBlockchains" >An Analogy Between kant and Blockchains</Link>
                <br /><br />
                <Link to="/notes/notesOnPotencyActivityAndFunction" >Notes on an Analogy Between Aristotle’s Potency-Activity Coupling and Functions in Programming</Link>
                <br /><br />
                <Link to="/notes/hashTablesAndRussellsTheoryOfDescriptions" >Hash Tables and Russell's Theory of Descriptions</Link>
                <br /><br />

              </div>
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
