import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import ReactTable from "react-table";
import Content from './components/Content'
import Footer from './components/Footer'
import Menu from './components/Menu';
import Header from './components/Header';


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
       <Menu/>
      <Content/>
      <Footer/>
      </BrowserRouter>

    </div>
    
  ) 
}
