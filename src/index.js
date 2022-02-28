import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import NotesPage from './components/NotesPage';
import ExternalPage from './components/ExternalPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'rsuite/dist/rsuite.min.css';
// import './stylesheets/style.css';


ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/notes" element={<NotesPage />} />
        <Route exact path="/external" element={<ExternalPage />} />
      </Routes>
    </BrowserRouter>,
  // <App />,
  document.getElementById('root')
);
