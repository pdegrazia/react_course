import React from 'react'
import Nav from './components/Navbar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {
  return(
    <div id="app">
      <Nav/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App