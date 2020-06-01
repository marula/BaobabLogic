import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Marula = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "marula.png" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      style={{
        margin: '0 auto 2rem',
        maxWidth: '300px',
        // maxHeight: '30px',
      }}
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="Marula Logo"
    />
  );
};

export default Marula;
