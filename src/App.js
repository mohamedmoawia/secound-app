import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
