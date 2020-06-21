import React from "react";
import { StaticQuery, graphql } from "gatsby";

const HeaderStatic = () => (
  <StaticQuery
    query={graphql`
      {
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
    `}
    render={(data) => <h4>{data.site.info.author}</h4>}
  ></StaticQuery>
);

// will go into example page
export default HeaderStatic;
