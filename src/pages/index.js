import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic2 from '../assets/images/accounting.jpg';
import pic3 from '../assets/images/benchpress.jpg';
import pic4 from '../assets/images/fitness.jpg';
import pic5 from '../assets/images/theatre.jpg';
import pic7 from '../assets/images/chat.png';
import pic8 from '../assets/images/profile.jpg';
import avatar from '../assets/images/avatar.jpg';
import anime from '../assets/images/anime.jpg';
import calc from '../assets/images/calculator.jpg';
import weather from '../assets/images/weather.jpg';
import ichabod from '../assets/images/ichabodlion.jpg';
import pic9 from '../assets/images/pic09.jpg';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>Bradley Litman</strong>
              <br />
            </h2>
            <h2 className="alt">A Self Taught Web Developer</h2>
            <p>I have been working on a few projects. Check them out!</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Completed and in progress/github</h2>
          </header>

          <p>
            These projects will show knowledge in JavaScript, HTML, CSS, React,
            Gatsby, MongoDB, GraphQl, Node.js, and more
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a
                  href="https://www.healthcaresystemsandservices.com/"
                  className="image fit"
                  target="_blank"
                >
                  <img src={pic2} alt="accounting website" />
                </a>
                <header>
                  <h3>Healthcare Systems and Services (live - business)</h3>
                  <h6>"Gatsby, Netlify, Active Form Submission"</h6>
                </header>
              </article>
              <article className="item">
                <a
                  href="https://sierra-resume.netlify.app/"
                  className="image fit"
                  target="_blank"
                >
                  <img src={pic5} alt="generic css" />
                </a>
                <header>
                  <h3>My Wife`s Theatre Resume</h3>
                  <h6>"HTML, CSS"</h6>
                </header>
              </article>
              <article className="item">
                <a
                  href="https://sad-liskov-05290c.netlify.app/"
                  className="image fit"
                  target="_blank"
                >
                  <img src={ichabod} alt="sphynx cat" />
                </a>
                <header>
                  <h3>Simple Parallax Example (+ Cats)</h3>
                  <h6>"Parallax, CSS"</h6>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a
                  href="https://litman-blog.netlify.app/"
                  className="image fit"
                  target="_blank"
                >
                  <img src={pic4} alt="barbell" />
                </a>
                <header>
                  <h3>Fitness Blog</h3>
                  <h6>"React, Gatsby, MDX"</h6>
                </header>
              </article>
              <article className="item">
                <a
                  href="https://github.com/Blitman12/chat-app"
                  className="image fit"
                  target="_blank"
                >
                  <img src={pic7} alt="chat bot" />
                </a>
                <header>
                  <h3>Simple Chat App (github)</h3>
                  <h6>"Node.js, Socket.io, JavaScript"</h6>
                </header>
              </article>
              <article className="item">
                <a
                  href="https://focused-joliot-3695d4.netlify.app/"
                  className="image fit"
                  target="_blank"
                >
                  <img src={avatar} alt="avatar clock" />
                </a>
                <header>
                  <h3>LoFi HipHop Avatar Clock</h3>
                  <h6>"JavaScript, HTML, CSS, Design"</h6>
                </header>
              </article>
              <article className="item">
                <a
                  href="https://sleepy-wiles-58c28e.netlify.app/"
                  className="image fit"
                  target="_blank"
                >
                  <img src={weather} alt="weather" />
                </a>
                <header>
                  <h3>Weather Widget</h3>
                  <h6>"React, API"</h6>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a
                  href="https://stupefied-mccarthy-042e49.netlify.app/"
                  className="image fit"
                  target="_blank"
                >
                  <img src={pic9} alt="benchpress" />
                </a>
                <header>
                  <h3>Simple Headless CMS Blog</h3>
                  <h6>"Contentful, Gatsby, GraphQl, Netlify"</h6>
                </header>
              </article>
              <article className="item">
                <a
                  href="https://benchpresscalc.netlify.app/ "
                  className="image fit"
                  target="_blank"
                >
                  <img src={pic3} alt="benchpress" />
                </a>
                <header>
                  <h3>Simple BenchPress Tracker</h3>
                  <h6>"Chart.js, JavaScript"</h6>
                </header>
              </article>
              <article className="item">
                <a
                  href="https://cranky-knuth-bb2350.netlify.app/"
                  className="image fit"
                  target="_blank"
                >
                  <img src={calc} alt="calculator" />
                </a>
                <header>
                  <h3>React Calculator</h3>
                  <h6>"React, JavaScript"</h6>
                </header>
              </article>
              <article className="item">
                <a
                  href="https://cocky-wozniak-1a4141.netlify.app/"
                  className="image fit"
                  target="_blank"
                >
                  <img src={anime} alt="anime" />
                </a>
                <header>
                  <h3>Anime Search</h3>
                  <h6>"API, JavaScript, Materialize"</h6>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          {/* <a href="/#" className="image featured">
            <img src={pic8} alt="" />
          </a> */}

          <p>
            I graduated with my Bachelor of Science in Nursing in 2016 and have
            worked at a few Emergency Departments until finally landing at
            American Express. Here I was introduced to the business/technology
            side of the world and revaluated my life`s goals. I determined that
            Web Development was my future and passion. I have been working full
            time and self teaching coding since March of 2020 and look forward
            to developing my skills and seek employment as a full time Web
            Developer.
          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>
          <p>
            I would love the opportunity to further my skills and evolve into an
            integral part of your team!
          </p>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
