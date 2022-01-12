import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import {
  Navbar,
  Exchanges,
  Cryptocurrencies,
  News,
  HomePage,
  CryptoDetails,
} from './components';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/exchanges' element={<Exchanges />}></Route>
              <Route
                path='/cryptocurrencies'
                element={<Cryptocurrencies />}
              ></Route>
              <Route path='/crypto/:coinId' element={<CryptoDetails />}></Route>
              <Route exact path='/news' element={<News />}></Route>
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title
            level={5}
            style={{ color: 'white', textAlign: 'center' }}
          >
            Coptobro © 2022
            <Link to='/'>Cryptobro Inc.</Link> <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
