import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import img from "../images/desktop.png";
import Image from "gatsby-image";

const getImages = graphql`
  {
    street: file(relativePath: { eq: "street.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 400, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ocean: file(relativePath: { eq: "ocean.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

const Images = () => {
  const data = useStaticQuery(getImages);
  console.log(data);
  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic Image</h3>
        <img src={img} alt="image of desktop" width="100%" />
        <h2>Content</h2>
      </article>
      <article className="single-image">
        <h3>Fixed image/Blur </h3>
        <Image fixed={data.street.childImageSharp.fixed} />
        <h2>Content</h2>
      </article>
      <article className="single-image">
        <h3> Fluid Image/svg</h3>
        <Image fluid={data.ocean.childImageSharp.fluid} />
        <h2>Content</h2>
      </article>
    </section>
  );
};

// will go into images page bw Layout
export default Images;
