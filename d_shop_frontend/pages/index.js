import styles from "../styles/Home.module.css";
import Product from "../components/Product";

export default function Home({ data,myContract,usrAddr }) {
  return (
    <div className="my-3">
      {data.map((prd) => {
        if (prd.bought_by == "") {
          return (
            <span key={prd.product_id}>
              <Product type="buy" prd={prd} myContract={myContract} usrAddr={usrAddr}/>
            </span>
          );
        }
      })}
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://159.223.186.223:3200/product/`);
  const data = await res.json(); // Pass data to the page via props
  return { props: { data } };
}
