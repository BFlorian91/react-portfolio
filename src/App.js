import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'

import ParticlesCustom from './Components/Particles/Particles'
import { ThemeContext } from './Context/ThemeContext'
import Workscase from './Pages/Workscase/Workscase'
import PageNotFound from './Pages/404/PageNotFound'
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header'
import Works from './Pages/Works/Works'
import Posts from './Pages/Posts/Posts'

import './App.css'

function App() {
  const { themePreference } = useContext(ThemeContext)

  return (
    <div
      className={themePreference.darkmode ? 'app darkmode' : 'app lightmode'}
    >
      <div className="particles">
        <ParticlesCustom />
      </div>
      <div className="global-container">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/works" component={Works} />
            <Route exact path="/works/:id" component={Workscase} />
            <Route exact path="/posts" component={Posts} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </main>
        <footer>© 2021 Beaumont Florian. All Rights Reserved.</footer>
      </div>
    </div>
  )
}

export default App
