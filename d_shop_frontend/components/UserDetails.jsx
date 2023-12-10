import React, { useState, useEffect } from "react";
import NewUserForm from "./NewUserForm";
import { ethers } from "ethers";

const UserDetails = ({
  logInStatus,
  setLogInStatus,
  usrAddr,
  setUsrAddr,
  setMyContract,
  setUserName,
  usrDetails,
  setUsrDetails,
  myContract,
}) => {
  const [balance, setBalance] = useState("");
  const [purchaseMudra, setPurchaseMudra] = useState(0);
  const [sellMudra, setSellMudra] = useState(0);
  const [hide, setHide] = useState(true);
  const fetchBalance = async () => {
    if (hide) {
      myContract
        .myBalance()
        .then((val) => {
          setBalance(val);
          setHide(false);
        })
        .catch((err) => {
          alert(`error occurred: ${err}`);
        });
    } else {
      setBalance("");
      setHide(true);
    }
  };
  const buyMudra = async () => {
    try {
      const amt = purchaseMudra / 1000;
      const options = { value: ethers.utils.parseEther(amt.toString()) };
      myContract
        .buyMudra(purchaseMudra, options)
        .then((tx) => {
          console.log("transaction occured : ", tx.hash);
          return tx
            .wait()
            .then(() => {
              alert("Mudra purchased successfully");
            })
            .catch((err) =>
              alert(`Error occurred while purchasing: ${err.message}`)
            );
        })
        .catch((err) => {
          alert(`Insufficient funds`);
        });
    } catch (e) {
      alert(`Error occurred: ${e}`);
    }
  };
  const cashInMudra = () => {
    if (sellMudra != "") {
      myContract
        .cashInMudra(sellMudra)
        .then((tx) => {
          console.log("transaction occured : ", tx.hash);
          return tx
            .wait()
            .then(() => {
              alert("Mudra cashed in successfully");
            })
            .catch((err) =>
              alert(`Error occurred while purchasing: ${err.message}`)
            );
        })
        .catch((err) => {
          alert(`Insufficient funds`);
        });
    }
  };
  if (usrDetails.name != undefined) {
    return (
      <div>
        <p>
          <b>Name:</b>
          <span className="mx-3 text-primary">{usrDetails.name}</span>
        </p>
        <p>
          <b>Phone:</b>{" "}
          <span className="mx-3 text-primary">{usrDetails.phone_no}</span>
        </p>
        <p>
          <b>Email:</b>{" "}
          <span className="mx-3 text-primary">{usrDetails.email}</span>
        </p>
        <p>
          <b>Delivery address:</b>{" "}
          <span className="mx-3 text-primary">
            {usrDetails.delivery_address}
          </span>
        </p>
        <div className="my-2">
          <button
            className="btn btn-outline-primary"
            onClick={async () => {
              fetchBalance();
            }}
          >
            {hide == true ? `Check balance` : `Hide balance`}
          </button>
          {hide == false && (
            <b className="mx-5 text-success">{`${balance} MDR`}</b>
          )}
        </div>
        <div className="my-2">
          <button
            className="btn btn-outline-primary me-3"
            onClick={async () => {
              buyMudra();
            }}
          >
            Purchase Mudra
          </button>
          <input
            type="number"
            placeholder="Amount of Mudra"
            value={purchaseMudra}
            onChange={(e) => {
              setPurchaseMudra(e.target.value);
            }}
          />
        </div>
        <div className="my-2">
          <button
            className="btn btn-outline-primary me-3"
            onClick={async () => {
              cashInMudra();
            }}
          >
            Cash In Mudra
          </button>
          <input
            type="number"
            placeholder="Amount of Mudra"
            value={sellMudra}
            onChange={(e) => {
              setSellMudra(e.target.value);
            }}
          />
        </div>
        <div>
          <b className="text-danger">Note:</b> 1 ETH = 1000 MDR
        </div>
        <div>
          <b className="text-success">Note:</b> Please wait for sometimes after
          doing transaction.
        </div>
      </div>
    );
  } else {
    return (
      <NewUserForm
        usrAddr={usrAddr}
        setUsrAddr={setUsrAddr}
        setMyContract={setMyContract}
        setUserName={setUserName}
        usrDetails={usrDetails}
        setUsrDetails={setUsrDetails}
        setLogInStatus={setLogInStatus}
      />
    );
  }
};

export default UserDetails;
