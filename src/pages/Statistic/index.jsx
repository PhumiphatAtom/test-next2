import React from "react";
import Layout from "../../components/Layout";
import Menu from "../../components/Menu";
import Stat from "../../components/Stat";

export default function Statistic() {
  return (
    <div>
      <Menu></Menu>
      <Stat></Stat>
    </div>
  );
}
Statistic.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
