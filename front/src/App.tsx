import React from 'react';
import { Navbar } from './components/Navbar';
import { TodoPage } from './pages/TodoPage';
import {connect} from "react-redux";

const App: React.FC = () => {
  
  return <>
  <Navbar />
    <div className="container wrapper">   
    <TodoPage/> 
    </div> 
  </>
}

export default connect ()(App);
