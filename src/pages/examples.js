import React from "react";

import Header from "../examples/Header";
import HeaderStatic from "../examples/HeaderStatic";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const examples = ({ data }) => {
  const {
    site: {
      info: {
        person: { name },
        author,
      },
    },
  } = data;

  return (
    <Layout>
      <p> hello from example page </p>
      <Header />
      <HeaderStatic />
      <h5>author: {author}</h5>
      <h5>name: {name}</h5>
    </Layout>
  );
};

export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        person {
          age
          name
        }
        author
        data
        description
        title
      }
    }
  }
`;
// will go to navbar
export default examples;
