import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaChevronDown, FaReact, FaLaptopCode } from 'react-icons/fa';
import { BiUpArrow } from "react-icons/bi";
import Project from "./components/Project";
import ProjectList from "./components/ProjectList";

function App() {

  function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  let goToTopBtn = document.querySelector(".top-btn");
  const scrollFunction = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        goToTopBtn.style.display = "block";
    } else {
        goToTopBtn.style.display = "none";
    }
  }

  window.onscroll = () => { scrollFunction() };

  return (
    <div className="App">
        {/* Page 1 - Introduction */}
        <section className="introduction">
          <div className="intro-container fade-in">
            <span className="top-name">I'm Hasan Solak,</span>
            <p className="main-text">
                  a sophomore Management Information <br/> Systems student at Boğaziçi University<br/>who&nbsp;
                  <span className="emphasize-love">loves </span>
                  <span className="main-text-emphasize">front-end development</span>.
            </p>
            <div className="icon-container flex" href="">
                <a href="https://github.com/h-solak" target="_blank" rel="noreferrer"><FaGithub className="contact-icons"/></a>
                <a href="https://www.linkedin.com/in/hasansolak/" target="_blank" rel="noreferrer"><FaLinkedin className="contact-icons"/></a>
                <a href="https://twitter.com/just_brtsh" target="_blank" rel="noreferrer"><FaTwitter className="contact-icons"/></a>
            </div>
          </div>
          <a className="arrow-down blink" href="#page-2"><FaChevronDown className="icon-size"/></a>
        </section>

        {/* Page 2 - Projects */}
        <section id="page-2" className="page-2">
        <div className="p-container flex">
          <p className="p-1"><FaReact className="icon-page2"/> I am currently learning React.js, and I built this website with it.</p>
          <p className="p-2"><FaLaptopCode className="icon-page2"/> I have experience with HTML, CSS, Javascript, Jquery, Bootstrap, and PHP.</p>
        </div>
        <a href="#page-3" className="p-3">Check out some of my projects I've been working on: <FaChevronDown className="icon-size blink"/></a>

        
        {/* PROJECTleri bi obje arrayinden çekecek o fake api örneğinde olduğu gibi, takılırsan onu incele */}
        </section>
        
        <section id="page-3">
          <div className="project-container">
            <h3>My Projects</h3>
            <Project list={ProjectList}/>
          </div>
        </section>
        
        <span className="top-btn" onClick={goTop}>
          <BiUpArrow className="top-btn-size"/>
        </span>
    </div>
  );
}

export default App;
