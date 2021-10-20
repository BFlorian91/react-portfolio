import Navbar from './Components/Navbar/Navbar';
import ChangeThemeBtn from './Components/ChangeThemeBtn/ChangeThemeBtn';
import QuickMe from './Components/QuickMe/QuickMe';
import Work from './Pages/Work/Work';
import Bio from './Pages/Bio/Bio';
import Hobbies from './Pages/Hobbies/Hobbies';
import Sociaux from './Pages/Sociaux/Sociaux';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="global-container">
        <header>
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
