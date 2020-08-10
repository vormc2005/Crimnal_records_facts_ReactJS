import React, {Component} from 'react';
import Navigationbar from './layout/navbar/Navigationbar';
import NationalPage from './pages/NationalPage';
import StatePage from './pages/StatePage';


import './App.css';


class App extends Component {

  

  render(){

  const pageName = 'APP Page'


  return (
    <div className='App '>
      <Navigationbar />
      <h1>{pageName}</h1>
      <NationalPage/>
      <StatePage />
    

    </div>
  );
  }
}

export default App;
