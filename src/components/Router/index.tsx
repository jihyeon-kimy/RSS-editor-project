import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import PageA from "../../pages/PageA";
import PageB from "../../pages/PageB";
import PageC from "../../pages/PageC";
import Layout from "../Layout";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pageA" element={<PageA />} />
        <Route path="/pageB" element={<PageB />} />
        <Route path="/pageC" element={<PageC />} />
      </Route>
    </Routes>
  );
};

export default Router;
