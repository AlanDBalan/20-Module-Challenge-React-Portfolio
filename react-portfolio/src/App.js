import React from 'react';
import './assets/css/style.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


const App = () => {
    return (
        <div>
          <Header /> {Header}
          <main>
            <AboutMe /> {AboutMe}
            <Portfolio /> {Portfolio}
            <Contact /> {Contact}
          </main>
        </div>
      );
    };

export default App;