import React from 'react';
import { HashRouter, Link, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HtmlTag } from '../../components/HtmlTag/HtmlTag';
import ScrollToTop from '../../utils/ScrollToTop';
import { Contact } from '../Contact/Contact';
import { Introduction } from '../Introduction/Introduction';
import { Profile } from '../Profile/Profile';
import { Projects } from '../Projects/Projects';
import { ThankYouPage } from '../ThankYouPage/ThankYouPage';
import './App.css'

const App = () => {

  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
    <main>
        <HashRouter basename={process.env.PUBLIC_URL}>
          {/* <Redirect to='/Home'></Redirect> */}
            <Switch>
              <Route path='/Home' render={() => 
               <HomePage></HomePage>}>
              </Route>
              <Route path='/ThanksPage' render={() => 
                <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.5}}>
                  <div >
                    <ThankYouPage></ThankYouPage>
                  </div>
                </motion.div>}>
              </Route>
              <Route path='/Project_msi_redesign' render={() => 
                <ProjectMsiRedesign></ProjectMsiRedesign>}>
              </Route>
              <Route path='/Project_personal_brand' render={() => 
                <ProjectPersonalBrand></ProjectPersonalBrand>}>
              </Route>
              <Route path='/Project_knights_fight' render={() => 
                <ProjectKnightsFight></ProjectKnightsFight>}>
              </Route>
              <Route path='/Project_tendi' render={() => 
                <ProjectTendi></ProjectTendi>}>
              </Route>
              <Route path='/Project_bristo' render={() => 
                <ProjectBristo></ProjectBristo>}>
              </Route>
              <Route path='/Project_abstract_sound_of_amazons' render={() => 
                <ProjectAbstractSoundOfAmazons></ProjectAbstractSoundOfAmazons>}>
              </Route>
            </Switch>
        </HashRouter>
    </main>
    </AnimatePresence>);
};

const HomePage = () => {
  return(
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}>
      <div>
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
            <img className="icon" src="./img/github.png"/>
          </a>
          <a href="https://www.behance.net/mateovalen835d" target="_blank">
            <img className="icon" src="./img/behance.png"/>
          </a>
        </div>
      </div>
    </motion.div>);
};

const ProjectMsiRedesign = () => {

  const ScrollToProjects = () => {
    window.scrollTo({
      top: 600,
    });
  }

  return(
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}>
      <div className="projectImgContainer">
        <ScrollToTop></ScrollToTop>
        <Link to="/Home">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            onClick={ScrollToProjects} className="goBackToProjects">Go back!</motion.button>
        </Link>
        <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c470e0116591169.6064cf9c3ce7b.png" />
        <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/2b47be116591169.6065267d67035.png" />
        <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/592f32116591169.6065267d67790.png" />
        <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/41faf9116591169.6065267d66aef.png" />
        <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/486098116591169.6065267d67cdc.png" />
        <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/ab041a116591169.6065267d664b4.png" />
      </div>
    </motion.div>);
};

const ProjectPersonalBrand = () => {

  const ScrollToProjects = () => {
    window.scrollTo({
      top: 600,
    });
  }

  return(
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}>
      <div className="projectImgContainer">
      <ScrollToTop></ScrollToTop>
      <Link to="/Home">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          onClick={ScrollToProjects} className="goBackToProjects">Go back!</motion.button>
      </Link>
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/2cfdac120399171.60b0b5fc3f5b4.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/7544a3120399171.60b0b6c7ca752.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/978cea120399171.60b0b5fc3fd76.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/2a847a120399171.60b0b5fc3e73a.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/62d279120399171.60b0b5fc40395.png" />
      </div>
    </motion.div>);
};

const ProjectKnightsFight = () => {

  const ScrollToProjects = () => {
    window.scrollTo({
      top: 600,
    });
  }

  return(
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}>
      <div className="projectImgContainer">
      <ScrollToTop></ScrollToTop>
      <Link to="/Home">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          onClick={ScrollToProjects} className="goBackToProjects">Go back!</motion.button>
      </Link>
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c9327f85608607.60b0b05f68635.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/41028d85608607.60b0b05f67eb9.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/01ec9985608607.60b0b05f6953e.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/79f8aa85608607.60b0b05f6a314.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/b2ed7a85608607.60b0b05f69d04.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/7d6ed685608607.60b0b05f68d56.png" />
      </div>
    </motion.div>);
};

const ProjectTendi = () => {

  const ScrollToProjects = () => {
    window.scrollTo({
      top: 600,
    });
  }

  return(
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}>
      <div className="projectImgContainer">
      <ScrollToTop></ScrollToTop>
      <Link to="/Home">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          onClick={ScrollToProjects} className="goBackToProjects">Go back!</motion.button>
      </Link>
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/362849109447343.5fd3baded27be.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/fc0945109447343.5fd3baded5a35.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/6f35cb109447343.5fd3baded6394.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/7e9d8e109447343.5fd3baded3b40.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/150e68109447343.5fd3baded9d47.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/258ecd109447343.5fd3badedb2ae.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/a76fdf109447343.5fd3baded31f7.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/4f4bb3109447343.5fd3baded4f0c.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/03f92d109447343.5fd3baded7aea.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c782a1109447343.5fd3baded6ea6.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/5dc3e0109447343.5fd3badedab07.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/02780b109447343.5fd3badeda359.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/edceea109447343.5fd3badedba01.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/5e42bc109447343.5fd3baded87ec.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/fc7712109447343.5fd3baded8e32.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/7eccd6109447343.5fd3baded455c.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/6b6c4e109447343.5fd3baded816d.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/93ef3d109447343.5fd3baded7511.png" />
      <div className="projectVideoContainer">
        <iframe className="projectVideo" src="https://www.youtube.com/embed/_obwW7btR-E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/92e99e109447343.5fd3baded95b2.png" />
      </div>
    </motion.div>);
};

const ProjectBristo = () => {

  const ScrollToProjects = () => {
    window.scrollTo({
      top: 600,
    });
  }

  return(
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}>
      <div className="projectImgContainer">
      <ScrollToTop></ScrollToTop>
      <Link to="/Home">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          onClick={ScrollToProjects} className="goBackToProjects">Go back!</motion.button>
      </Link>
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/0f8c47120493821.60b2bc592d161.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/4f1c97120493821.60b2bc592dffa.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/17c563120493821.60b2bc592b726.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/4297ee120493821.60b2bc592d8ae.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/ebb9d9120493821.60b2bc592afd1.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/663ec4120493821.60b2bc5928dca.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/f418c6120493821.60b2bc59280d2.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/3fb31c120493821.60b2bc592959c.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/df38d6120493821.60b2bc592741c.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/642a84120493821.60b2bc5929e08.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/229a16120493821.60b2bc592be08.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/b92e0d120493821.60b2bc592a7a5.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/02ed92120493821.60b2bc592ca81.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/26373f120493821.60b2bc5928752.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/2dbd76120493821.60b2bc592c449.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/3da294120493821.60b2bc5927b76.png" />
      </div>
    </motion.div>);
};

const ProjectAbstractSoundOfAmazons = () => {

  const ScrollToProjects = () => {
    window.scrollTo({
      top: 600,
    });
  }

  return(
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}>
      <div className="projectImgContainer">
      <ScrollToTop></ScrollToTop>
      <Link to="/Home">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          onClick={ScrollToProjects} className="goBackToProjects">Go back!</motion.button>
      </Link>
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/9d46b897383049.60b090b90291e.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/2f592097383049.60b090b8f2949.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/18fb5297383049.60b090b8f3006.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/3ee95797383049.60b090b901a34.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/71b56597383049.60b092e19a0cd.jpg" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/537d8997383049.60b090b9010a5.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/52ea0297383049.60b092e1998ff.jpg" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/1dcbe697383049.60b090b8f38de.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/19c9bb97383049.60b090b8f211f.png" />
      <img className="projectImg" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/f37ff297383049.60b090b8f407b.png" />
      </div>
    </motion.div>);
};

export default App;
