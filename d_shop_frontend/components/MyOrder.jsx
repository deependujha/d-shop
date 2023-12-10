import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

const MyOrder = ({ usrAddr, usrDetails, myContract }) => {
  let flag = true;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://159.223.186.223:3200/product/`)
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        console.log(`Error occurred: {e}`);
      });
  }, [data]);
  return (
    <div className="container my-3">
      <h3>Your orders are on the way: 🛒</h3>
      {data
        .filter((dt) => {
          if (dt.bought_by === usrAddr) {
            flag = false;
          }
          return dt.bought_by === usrAddr;
        })
        .map((val) => {
          return (
            <span key={val.product_id}>
              <Product
                type="cancel"
                prd={val}
                myContract={myContract}
                usrAddr={usrAddr}
              />
            </span>
          );
        })}
      {flag && (
        <div className="my-4">
          Seems like you have not ordered anything yet. 🥺
        </div>
      )}
    </div>
  );
};

export default MyOrder;
