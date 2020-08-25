import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header"; 
import ContentPieceOne from "./ContentPieceOne"; 
import Footer from "./Footer"; 

function App() {
  return (
  	<div class="site">
    	<Header /> 
    	<ContentPieceOne />
    	<Footer /> 
    </div>  
  )
}

export default App
