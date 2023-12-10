import React from "react";
import Image from "next/image";
import UserDetails from "./UserDetails";

const Account = ({
  logInStatus,
  setLogInStatus,
  usrAddr,
  setUsrAddr,
  setMyContract,
  myContract,
  setUserName,
  usrDetails,
  setUsrDetails,
}) => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-sm">
          <UserDetails
            logInStatus={logInStatus}
            setLogInStatus={setLogInStatus}
            usrAddr={usrAddr}
            setUsrAddr={setUsrAddr}
            setMyContract={setMyContract}
            setUserName={setUserName}
            usrDetails={usrDetails}
            setUsrDetails={setUsrDetails}
            myContract={myContract}
          />
        </div>
        <div
          className="col-sm"
          style={{
            // backgroundColor: "red",
            height: "400px",
            width: "250px",
            borderRadius: "15px",
            overflow: "hidden",
            position: "relative",
            margin: "auto",
          }}
        >
          <Image
            src="/user.jpeg"
            alt="user profile"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Account;
