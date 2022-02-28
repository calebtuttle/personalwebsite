import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'rsuite/dist/rsuite.min.css';
// import './stylesheets/style.css';


ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>,
  // <App />,
  document.getElementById('root')
);
