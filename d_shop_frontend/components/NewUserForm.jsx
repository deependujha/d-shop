import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const NewUserForm = ({
  usrAddr,
  setUserName,
  setLogInStatus,
  setUsrDetails,
}) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [delAddr, setDelAddr] = useState("");

  const submitBtnClick = (e) => {
    e.preventDefault();
    console.log(`submit button clicked`);
    axios
      .post("http://159.223.186.223:3200/account/new", {
        walletAddress: usrAddr,
        name,
        email,
        phone_no: phone,
        delivery_address: delAddr,
      })
      .then((response) => {
        console.log(response);
        setUserName(`Hii, ${name}`);
        setLogInStatus(true);
        setUsrDetails({
          name,
          email,
          phone_no: phone,
          delivery_address: delAddr,
        });
        router.push("/");
      })
      .catch((e) => {
        alert(`an error occured: ${e}`);
      });
  };
  return (
    <form onSubmit={submitBtnClick}>
      <div className="form-group my-2">
        <label htmlFor="InputName">Name</label>
        <input
          name="name"
          type="text"
          onChange={(v) => {
            setName(v.target.value);
          }}
          className="form-control"
          id="InputName"
          value={name}
          required
        />
      </div>
      <div className="form-group my-2">
        <label htmlFor="InputPhone">Phone no.</label>
        <input
          name="phone_no"
          type="number"
          onChange={(v) => {
            if (phone.length < 14) setPhone(v.target.value);
          }}
          className="form-control"
          id="InputName"
          value={phone}
          maxLength="14"
          required
        />
      </div>

      <div className="form-group my-2">
        <label htmlFor="InputEmail">Email address</label>
        <input
          type="email"
          name="email"
          onChange={(v) => {
            setEmail(v.target.value);
          }}
          className="form-control"
          id="InputEmail"
          aria-describedby="emailHelp"
          value={email}
          required
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group my-2">
        <label htmlFor="InputDeliveryAddress">Delivery Address</label>
        <input
          name="delivery_address"
          type="text"
          onChange={(v) => {
            setDelAddr(v.target.value);
          }}
          className="form-control"
          id="InputDeliveryAddress"
          value={delAddr}
          required
        />
      </div>
      <div className="form-group my-2">
        <label htmlFor="InputWalletAddress">Wallet Address</label>
        <input
          onChange={(e) => {}}
          type="text"
          className="form-control"
          id="InputWalletAddress"
          value={usrAddr}
          name="walletAddress"
        />
        <small
          id="walletHelp"
          className="form-text"
          style={{ color: "#6e240d" }}
        >
          Click on 'connect with metamask' in the navigation bar.
        </small>
      </div>

      <button
        type="submit"
        className="btn btn-primary my-2"
        disabled={usrAddr === "" ? true : false}
      >
        Submit
      </button>
    </form>
  );
};

export default NewUserForm;
