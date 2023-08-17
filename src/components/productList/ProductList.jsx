import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Creative & Design Samples</h1>
        <p className="pl-desc">
          Jm is a creative software design that your work has been waiting for.
          responsive design, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
