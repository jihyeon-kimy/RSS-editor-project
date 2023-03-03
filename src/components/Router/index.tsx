import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import PageA from "../../pages/PageA";
import PageB from "../../pages/PageB";
import PageC from "../../pages/PageC";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pageA" element={<PageA />} />
      <Route path="/pageB" element={<PageB />} />
      <Route path="/pageC" element={<PageC />} />
    </Routes>
  );
};

export default Router;
