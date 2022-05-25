import './App.css'
import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import "antd/dist/antd.min.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home'
import { Typography } from 'antd';
import { DrawerNavigator } from './components/DrawerNavigator';
import Footer from './components/Footer';

const { Title } = Typography;

const styles={
  navigator:{
    flex:1
  },
  home:{
    flex:4
  }
}

function App(){
  return (
    <div id='App'>
      <Home/>
      
      <Footer/>
    </div>
    
  )
}

export default App;
