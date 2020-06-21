import React from "react";
import classes from "../components/blog.module.css";

import Layout from "../components/layout";

const Blog = () => {
  return (
    <Layout>
      <div className={classes.page}>
        <h1>This is our blog page</h1>
        <p className={classes.text}>
          е едноставен модел на текст кој се користел во печатарската
          индустрија. Lorem ipsum бил индустриски стандард кој се користел како
          модел уште пред 1500 години, кога непознат печатар зел кутија со букви
          и ги сложил на таков начин за да направи примерок на книга. И не само
          што овој модел опстанал пет векови
        </p>
      </div>
    </Layout>
  );
};

// will go into index
export default Blog;
