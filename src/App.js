import React from 'react'
import Nav from './components/Navbar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import TimeMessage from './components/TimeMessage'

function App() {
  return(
    <div id="app">
      <Nav/>
      <MainContent/>
      <TimeMessage/>
      <Footer/>
    </div>
  );
}

export default App