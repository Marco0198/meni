import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
const Card = ({ item }) => {
  const url = "https://microshare.azureedge.net/microstorage/img/";

  return (
    <>
      <div className="container ml-5 mr-5 mt-5">
        <div className="row ml-5 justify-content-center  ">
          {item.map((Val) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                animate={{ x: 10, y: 20 }}
                transition={{
                  x: { type: "spring", stiffness: 100 },
                  default: { duration: 1 },
                }}
                className="col-sm-3 card  border-0 "
                key={Val.id}
              >
                <div
                  className="card-img-top text-center h-75 w-100 "
                  style={{ background: "#e6f5f9" }}
                >
                  <img
                    src={`${url}${Val.category}/${Val.title}.png`}
                    alt={Val.title}
                    className="photo w-100 border-0 "
                  />
                </div>
                <div className=" card-title-center  py-3 ">{Val.title}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
