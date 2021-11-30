import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle  } from 'styled-components';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
// import './index.css';
const GlobalStyle = createGlobalStyle `
@font-face {
  font-family: 'S-CoreDream-6Bold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-6Bold.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
  html * { font-family: 'S-CoreDream-6Bold';}
  body {
      background : #030303;
      margin : 0;
      padding : 0;
      color : #fff;
  }
  body * {
    margin : 0;
    padding : 0;
  }
  a {
    text-decoration : none;
    color : inherit;
  }
  ul {
    list-style : none;
  }

  .section{
    padding : 30px 0;
  }

  .section h1{
    font-size : 38px;
    margin-bottom : 32px;
    color : white;
  }
`


export default function App({ location }){ 

  return(
    <BrowserRouter>
        <GlobalStyle/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
        </Routes>
        {/* <Footer/> */}
    </BrowserRouter>
  )
}

