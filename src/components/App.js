import React from 'react';
import './styles/App.css';

import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import Login from './login/Login';
import { useStateValue } from '../StateProvider';

function App() {

  const[{ user }, dispatch] = useStateValue();

  return (
    //BEM naming convention
    <div className="app">
    { !user ? 
      <Login/>
    : ( 
      <>
        <Header/>
        <div className="app__body">
          <Sidebar/>
          <Feed/>
          <Widget/>
        </div>
      </>
    )}
    </div>
  );
}

export default App;
