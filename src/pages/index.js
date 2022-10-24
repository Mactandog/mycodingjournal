import React from 'react';
import '../App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AboutUs from './aboutus';
import Actitivities from './activities';
import Home from './home';
import Portfolio from './portfolio';
import Hook from './hook'
import ContactUs from './contactUs';
import MyCodingJournal from './myJournal';


const Index = () => {
  return (
    <Router>
        <Header />
        <div className="main">
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/aboutus" element={<AboutUs/>} />
            <Route path="/activities" element={<Actitivities/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/hook" element={<Hook/>} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/mycodingjournal" element={<MyCodingJournal />} />
        </Routes>
        </div>
        <Footer />
    </Router>
  )
}

export default Index;

