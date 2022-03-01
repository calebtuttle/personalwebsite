import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'rsuite/dist/rsuite.min.css';
import './stylesheets/style.css';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import NotesPage from './components/NotesPage';
import NoteContainer from './components/NoteContainer';
import ExternalPage from './components/ExternalPage';

import postsDictionary from './postsDictionary';


ReactDOM.render(
  <div style={{ marginBottom: "25px" }}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/notes" element={<NotesPage />} />
        {/* <Route exact path="/note" element={<NoteContainer />} /> */}
        <Route exact path="/external" element={<ExternalPage />} />

        {/* Pages/Components for individual posts */}
        <Route exact path="/notes/whatIsDeSci" element={postsDictionary.whatIsDeSci} />
        <Route exact path="/notes/anAnalogyBetweenKantAndBlockchains" element={postsDictionary.anAnalogyBetweenKantAndBlockchains} />
        <Route exact path="/notes/decisionMakingFunction" element={postsDictionary.decisionMakingFunction} />
        <Route exact path="/notes/hashTablesAndRussellsTheoryOfDescriptions" element={postsDictionary.hashTablesAndRussellsTheoryOfDescriptions} />
        <Route exact path="/notes/internalConflictAndTheInternalCommunity" element={postsDictionary.internalConflictAndTheInternalCommunity} />
        <Route exact path="/notes/maslowsHierarchyOfNeedsAsAUtilityFunction" element={postsDictionary.maslowsHierarchyOfNeedsAsAUtilityFunction} />
        <Route exact path="/notes/notesOnFriendship" element={postsDictionary.notesOnFriendship} />
        <Route exact path="/notes/notesOnPracticalScience" element={postsDictionary.notesOnPracticalScience} />
        <Route exact path="/notes/notesOnPotencyActivityAndFunction" element={postsDictionary.notesOnPotencyActivityAndFunction} />
        <Route exact path="/notes/startingToLearnAboutThePhilosophyOfScience" element={postsDictionary.startingToLearnAboutThePhilosophyOfScience} />
      </Routes>
    </BrowserRouter>
  </div>,
  // <App />,
  document.getElementById('root')
);
