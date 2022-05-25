import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App'
import Home from './components/Home'
import { Adopt } from './components/Adopt';
import {About} from './components/About'
import SignIn from './components/SignInPage/index'
import Feed from './components/Feed/index'
import AdoptionForm from './components/AdoptionForm'
import ReportMissing from './components/ReportMissing'
import MissingPets  from './components/MissingPets'
import Volunteer from './components/Volunteer'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}/>
        <Route path="home" element={<Home />}/>
        <Route path="adopt" element={<Adopt />}/>
        <Route path="about" element={<About/>}/>
        <Route path="Feed" element={<Feed/>}/>
        <Route path="AdoptionForm" element={<AdoptionForm/>}/>
        <Route path="ReportMissing" element={<ReportMissing/>}/>
        <Route path="MissingPets" element={<MissingPets/>}/>
        <Route path="Volunteer" element={<Volunteer/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
