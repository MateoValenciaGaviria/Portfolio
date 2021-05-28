import React from 'react';
import { BrowserRouter, HashRouter, Link, Redirect, Route } from 'react-router-dom';
import { HtmlTag } from '../../components/HtmlTag/HtmlTag';
import { Contact } from '../Contact/Contact';
import { Introduction } from '../Introduction/Introduction';
import { Profile } from '../Profile/Profile';
import { Projects } from '../Projects/Projects';
import './App.css'

export const App = () => {

  return (
    <main>
      <HashRouter>
        <Redirect from='/' exact to='/Home'></Redirect>
          <Route path='/Home' render={() => 
            <div >
              <HtmlTag tag={"<html>"}></HtmlTag>
              <HtmlTag tag={"⠀<body>"}></HtmlTag>
                <Introduction></Introduction>
                <Projects></Projects>
                <Profile></Profile>
                <Contact></Contact>
              <HtmlTag tag={"⠀</body>"}></HtmlTag>
              <HtmlTag tag={"</html>"}></HtmlTag>
              <div className="appIcons">
                <a href="https://github.com/MateoValenciaGaviria" target="_blank">
                  <img className="icon" src="/img/github.png"/>
                </a>
                <a href="https://www.behance.net/mateovalen835d" target="_blank">
                  <img className="icon" src="/img/behance.png"/>
                </a>
              </div>
            </div>}>
          </Route>
          <Route path='/ThanksPage' render={() => 
            <div >
              
            </div>}>
          </Route>
          <Route path='/Projects' render={() => 
            <div >
              
            </div>}>
          </Route>
          
      </HashRouter>
    </main>
  );
}

export default App;
