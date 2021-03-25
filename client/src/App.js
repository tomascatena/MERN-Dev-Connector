import React from 'react';
import './App.css';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Landing />
    </React.Fragment>
  );
};

export default App;
