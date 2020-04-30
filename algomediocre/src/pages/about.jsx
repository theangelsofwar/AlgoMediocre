import React from 'react';
import Layout from '../layout';
import SEO from '../components/SEO';
import './about.scss';

const About = () => {
  return (
    <Layout>
      <SEO title="About" path="/about" />
      <article className="about">
        <img src={require("../../static/images/elemetal-vase.jpg")} className="user-avatar" alt="algomediocre" />
        <section className="about-context">
          <div>
            <h3>Welcome to AlgoMediocre</h3>
            <p className="time">2020-04-28</p>
            <p>
            
              <a href="https://angiechangpagne.com"> Yve Vestal Titan (Angie Changpagne) </a>
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default About;
