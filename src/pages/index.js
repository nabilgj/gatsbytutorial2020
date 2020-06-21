import React from "react";

import Layout from "../components/layout";
import { ExampleButton } from "../components/button";

export default () => (
  <Layout>
    <h1 style={{ color: "salmon", textTransform: "capitalize" }}>
      {" "}
      hello from gatsby{" "}
    </h1>
    <h1>haha</h1>
    <h1>hehe</h1>

    <ExampleButton>Click me</ExampleButton>
  </Layout>
);
