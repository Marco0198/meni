import React, { useState ,useContext} from "react";
import Data from "../Data";
import Card from "../Card";
import Buttons from "../Buttons";
//import {motion} from 'framer-motion/dist/framer-motion'
//import logo from "./memi-logo.png";
import NavBar from "../NavBar";
import Carousel from "../Carousel";
// import AppState from './../context/AppState';
// import AppContext from './../context/appContext';

const Catalogue = () => {
  const [item, setItem] = useState([]);
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <>
      <NavBar>
        <Buttons
          filterItem={filterItem}
          setItem={setItem}
          menuItems={menuItems}
        />
      </NavBar>
      
      <div className="container">
        <Carousel />
        <div className="row">
          <Card item={item} />
        </div>
      </div>
    </>
  );
};

export default Catalogue ;
