import React, { useEffect } from "react";
import Bar, { Layout } from "../components/Bar";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}post/`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });
  return (
    <Layout>
      <Bar />
      <div>home</div>
    </Layout>
  );
};

export default Home;
