import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <h1>main page</h1>
      </div>
      <div className='footer'>
        <h1>Footer</h1>
      </div>
    </div>
  );
};

export default App;
