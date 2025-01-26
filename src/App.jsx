import React from "react";
import Layout from "../src/Layout";
import Preloader from "./Components/global/Preloader";
import Anilogo from "./Assets/Logo_1.png"

const App = () => {
  return (
    <>
      <Preloader logoText="<> Welcome to my Portfolio webiste </>" logoImage={Anilogo}  />
      <Layout />
    </>
  );
};

export default App;
