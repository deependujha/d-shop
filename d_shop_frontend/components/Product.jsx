import React from "react";
import style from "../styles/Product.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const Product = ({ type, prd, myContract, usrAddr }) => {
  const clk = async () => {
    if (type === "buy") {
      myContract
        .purchaseItem(prd.product_id, prd.sellerAddress, prd.price)
        .then((tx) => {
          console.log("transaction occured : ", tx.hash);
          return tx
            .wait()
            .then(() => {
              axios
                .post(`http://159.223.186.223:3200/order/`, {
                  walletAddress: usrAddr,
                  product_id: prd.product_id,
                })
                .then(() => {
                  alert("Order placed successfully");
                })
                .catch((e) => {
                  alert(`an error occurred: ${e}`);
                });
            })
            .catch((err) => {
              alert("You don't have sufficient balance", err.message);
              console.log(`Error occurred: ${e}`);
            });
        })
        .catch((err) => {
          alert("You don't have sufficient balance");
        });
    } else {
      myContract
        .cancelOrder(prd.product_id)
        .then((tx) => {
          console.log("transaction occured : ", tx.hash);
          return tx
            .wait()
            .then(() => {
              const myTempData = {
                walletAddress: usrAddr,
                product_id: prd.product_id,
              };
              axios
                .delete(`http://159.223.186.223:3200/order/`, {
                  headers: {
                    Accept: "*/*",
                  },
                  data: myTempData,
                })
                .then((reply) => {
                  console.log(reply);
                  alert("Order cancelled successfully");
                })
                .catch((e) => {
                  alert(`an error occurred: ${e}`);
                });
            })
            .catch((err) => {
              alert("You don't have sufficient balance", err.message);
              console.log(`Error occurred: ${e}`);
            });
        })
        .catch((err) => {
          alert("You don't have sufficient balance");
        });
    }
    // console.log(`button clicked`);
  };
  const secretKey = async () => {
    myContract
      .checkDeliveryKey(prd.product_id)
      .then((val) => {
        alert(`Your delivery key is: ${val}`);
      })
      .catch((e) => {
        alert(`Error occurred: ${e}`);
      });
  };
  return (
    <div className={style.myContainer}>
      <div
        style={{
          width: "350px",
          height: "300px",
          position: "relative",
          backgroundColor: "#e6e6e6",
          borderRadius: "15px",
        }}
      >
        <Image
          src={`http://159.223.186.223:3200${prd.image}`}
          layout={"fill"}
          objectFit={"contain"}
          alt="myproduct"
        />
      </div>

      <p style={{ textAlign: "center" }}>{prd.product_name}</p>

      <p>
        price: <b>{prd.price} MDR</b>
        <span
          className="ms-4"
          style={{ visibility: `${type === "cancel" ? "visible" : "hidden"}` }}
        >
          <button
            className={`btn btn-success  `}
            onClick={async () => {
              secretKey();
            }}
          >
            Delivery Key
          </button>
        </span>
        <button
          className={`btn ${
            type == "buy" ? "btn-primary" : "btn-danger"
          } ms-1 `}
          style={{}}
          onClick={async () => clk()}
        >
          {type == "buy" ? `Buy Now` : `Cancel`}
        </button>
      </p>
    </div>
  );
};

export default Product;
