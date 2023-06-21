import { Component } from 'react';
import './App.css';
import Forms from './components/Forms.js';
import Layout from './components/Layout.js';

class App extends Component{

  render(){
  return (
    <>
      <Forms/>
      <Layout/>
    </>
  )
}
}

export default App;
