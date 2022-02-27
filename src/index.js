import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'rsuite/dist/rsuite.min.css';
// import './stylesheets/style.css';


ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>,
  // <App />,
  document.getElementById('root')
);
