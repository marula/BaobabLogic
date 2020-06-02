import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Marula from '../components/marula';
import Baobab from '../images/baobab.svg';

const AboutPage = () => (
  <Layout>
    <SEO title="Goodbye from Baobab Logic and Marula" />
    <p style={{ textAlign: 'justify', textJustify: 'inter-word' }} />
    <div
      style={{
        margin: '2rem auto 0',
        maxWidth: '400px',
      }}
    >
      <img style={{ marginBottom: '0.8rem' }} src={Baobab} alt="Baobab Logic Logo" />
    </div>
    <h1 style={{ textAlign: 'center', fontWeight: 'normal' }}>
      &
    </h1>
    <Marula />
    <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
      <strong>Baobab Logic and Marula are no longer operating.</strong>
      {' '}
      To all those
      who contributed to what we achieved over the years, thank you so much!
    </p>
    <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
      For those looking for our story, I will leave a short summary here:
    </p>
    <p>
      Baobab Logic was a a startup incubator which aimed to bring
      together investors, entrepreneurs, developers, and designers to build
      great products. Over the years we were always looking
      for startups building innovative products to join or partner with.
      We chose to focus specifically on African startups solving problems in the payments,
      travel or education industries.
    </p>
    <p>
      Integral to what Baobab Logic achieved was Marula, a web development consultancy
      launched from within Baobab Logic. Marula worked primarily in Ruby and JavaScript
      environments. With a small team of software developers
      building robust solutions for various clients Marula supplied the primary source of income
      for Baobab Logic.
    </p>
    <p>
      After a couple years of serving various clients Marula, and by extension Baobab Logic,
      began a partnership
      that would ultimately define our story when we became involved in the beta version of
      {' '}
      <a href="https://www.activitar.com">Activitar</a>
      . As our contributions there grew we became closer to the Activitar mission, and in the end
      the majority of the Marula team joined Activitar on a permanent basis. What followed was an
      incredibly fullfilling period, working hard, and ultimately helping to turn Activitar into
      the largest activity platform in Africa.
    </p>
    <p>
      <strong>- Rick Kleinhans, Founder</strong>
    </p>
  </Layout>
);

export default AboutPage;
