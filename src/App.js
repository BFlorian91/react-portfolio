import React, { useContext, useState } from 'react';

import Navbar from './Components/Navbar/Navbar';
import ChangeThemeBtn from './Components/ChangeThemeBtn/ChangeThemeBtn';
import QuickMe from './Components/QuickMe/QuickMe';
import Work from './Pages/Work/Work';
import Bio from './Pages/Bio/Bio';
import Hobbies from './Pages/Hobbies/Hobbies';
import Sociaux from './Pages/Sociaux/Sociaux';
import ParticlesCustom from './Components/Particles/Particles';
import { ThemeContext } from './Context/ThemeContext';


import './App.css';


function App() {
  const [navBlur, setNavBlur] = useState(false)

  const { theme } = useContext(ThemeContext)

  const blurNavbar = () => {
    window.scrollY >= 30 ? setNavBlur(true) : setNavBlur(false)
  }

  window.addEventListener('scroll', blurNavbar)

  return (
    <div id="app" className={theme.darkmode ? "app darkmode" : "app lightmode"}>
      <div className='particles'>
        <ParticlesCustom />
      </div>
      <div className="global-container">
        <header className={navBlur ? "header active" : "header"}>
          <div className="left-part">
            <p>Florian Beaumont</p>
            <Navbar />
          </div>
          <ChangeThemeBtn />
        </header>
        <main>
          <QuickMe />
          <Work />
          <Bio />
          <Hobbies />
          <Sociaux />
        </main>
        <footer>© 2021 Beaumont Florian. All Rights Reserved.</footer>
      </div>
    </div>
  );
}

export default App;
