import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="container my-3">
      <h4 className="my-3 d-flex justify-content-center">|| श्री ||</h4>
      <h4>Namastey! 🙏</h4>
      <div className="my-2">
        ➤ Hi, I'm Deependu Jha, a third-year ECE student at BIT Mesra, Ranchi. I
        made this decentralised shopping application (D-shop).
      </div>
      <div className="my-4">
        <h4>Problem it solves 🧐</h4>
        <div className="my-2">
          ➤ Many fake e-commerce apps take your money, but never deliver the
          products. So, a smart-contract has been created where I created a
          token called 'Mudra'. People will buy products using Mudra token, and
          when they purchase a product, balance is deducted from their balance
          but is not sent to the seller's account. Rather, balance is kept as it
          is in the smart-contract. Once the product is delivered, then only
          sellers receive their share of money. Hence, preventing any fraud.
        </div>
      </div>
      <div className="my-4">
        <h4>Tech stacks used 👨‍💻</h4>
        <div className="my-2">
          ➤ <b>Frontend:</b> Next.js, and Bootstrap.
          <br />➤ <b>Backend:</b> Express Js, and MongoDB.
          <br />➤ <b>Smart-contract (Blockchain):</b> Hardhat, Mocha & chai,
          Solidity, Infura, Ethers.Js
        </div>
      </div>
      <div className="my-4">
        <h4>Smart-Contract's Token 🪙</h4>
        <div className="my-2">
          <h5>
            ➤ <u className="text-success">Mudra</u>
          </h5>
          <div className="my-2">
            <div className="row">
              <div className="col-sm">
                <ul>
                  <li>Users can buy 1000 Mudras (MDR) for 1 Ether.</li>
                  <li>
                    Users can also cash in their Mudras (MDR) and get their
                    ethers in the wallet.
                  </li>
                  <li>
                    When a user purchases a product, mudras are deducted from
                    his/her account, but they are not sent to the seller's
                    account.
                  </li>
                  <li>
                    Mudras will be sent to the seller's address only after the
                    product is delivered.
                  </li>
                  <li>
                    To receive the product, you need to generate your unique
                    delivery key. Once delivery person verifies the delivery
                    key, the product will be delivered to you.
                  </li>
                  <li>
                    <b className="text-danger">Note:</b> Only you/buyer can
                    check his/her delivery key. So, don't give it to anyone
                    unknown.
                  </li>
                </ul>
              </div>

              <div className="col-sm d-flex justify-content-center">
                <Image
                  src="/coin.png"
                  alt="user profile"
                  height="250px"
                  width="250px"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3">
        <h4>Acknowledgment 🙌</h4>
        <div className="my-2">
          <ul>
            <li>Thanks to `Prof. Priyank Sir` for his guidance.</li>
            <li>
              Thanks to SIME club-BIT Mesra, for assigning me the project.
            </li>
            <li>
              Thanks to Dhiren Kumar for creating a beautiful icon of the Mudra
              coin.
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <h6>{`<===X===>`}</h6>
      </div>
    </div>
  );
};

export default About;
