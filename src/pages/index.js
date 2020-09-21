import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic2 from '../assets/images/accounting.jpg';
import pic3 from '../assets/images/benchpress.jpg';
import pic4 from '../assets/images/fitness.jpg';
import pic5 from '../assets/images/theatre.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import pic8 from '../assets/images/profile.jpg';
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
              <br />A Self Taught Web Developer
            </h2>
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
            <h2>Completed and in progress</h2>
          </header>

          <p>
            These projects will show knowledge in Javascript, HTML, CSS, React,
            Gatsby, Bootstrap and Material-UI
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a
                  href="https://www.healthcaresystemsandservices.com/"
                  className="image fit"
                  target="_blank"
                >
                  <img src={pic2} alt="" />
                </a>
                <header>
                  <h3>Healthcare Systems and Services</h3>
                </header>
              </article>
              <article className="item">
                <a
                  href="https://benchpresscalc.netlify.app/"
                  className="image fit"
                  target="_blank"
                >
                  <img src={pic3} alt="" />
                </a>
                <header>
                  <h3>Simple BenchPress Tracker</h3>
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
                  <img src={pic4} alt="" />
                </a>
                <header>
                  <h3>Fitness Blog</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a
                  href="https://sierra-resume.netlify.app/"
                  className="image fit"
                  target="_blank"
                >
                  <img src={pic5} alt="" />
                </a>
                <header>
                  <h3>My Wife`s Theatre Resume</h3>
                </header>
              </article>
              {/* <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic7} alt="" />
                </a>
                <header>
                  <h3>Orci Convallis</h3>
                </header>
              </article> */}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={pic8} alt="" />
          </a>

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
            name="getincontact"
            method="post"
            data-netlify="true"
          >
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
                <input name="sumbit" type="submit" value="Send Message" />
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
