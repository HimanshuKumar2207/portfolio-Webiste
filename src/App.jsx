import React, { useEffect, useState } from "react";
import Layout from "../src/Layout";
import Preloader from "./Components/Home/preloader";


const App = () => {
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? <Preloader /> : <>  </>}
     
      <Layout />
    </>
  );
};

export default App;
