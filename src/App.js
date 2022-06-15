import React, { useState } from "react";

import Catalogue from "./pages/Catalogue";
import Product from "./pages/Product";
const App = () => {
  const [toggleView, setToggleView] = useState(false);
  const ChangeView = () => {
    setToggleView((toggleView) => !toggleView);
  };
  return (
    <>
      <button onClick={ChangeView}>Change View</button>
      {!toggleView ? <Catalogue /> : <Product />}
    </>
  );
};

export default App;
