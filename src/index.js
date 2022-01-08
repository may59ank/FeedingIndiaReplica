import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/About-page';
import CampaignPage from './pages/Campaign-page';
import RequestForFoodPage from './pages/RequestForFood-page';
import PartnerPage from './pages/Partner-page';
import ContactPage from './pages/Contact-page';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/campaign" element={<CampaignPage />}></Route>
      <Route path="/request-for-food" element={<RequestForFoodPage />}></Route>
      <Route path="/partner" element={<PartnerPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
