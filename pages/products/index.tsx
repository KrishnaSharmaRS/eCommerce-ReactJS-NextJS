import React from "react";

import ProductCard from "../../components/ProductCard";
import { IProduct } from "../../typescript/product/types";

interface IProps {
  products: IProduct[];
}

const ProductsPage = ({ products }: IProps) => {
  return (
    <main className="_4_JdX _1AQ9-">
      <div className="_2ezKP LkBmC _3AP5M">
        <h1 className="_2b45P">Products</h1>
      </div>
      <div className="I1Lsq _1yfX5 _2rRrS" style={{ transitionDelay: "800ms" }}>
        <section className="_13dOJ">
          <div className="_2ezKP _2Vnfd _3AP5M">
            <div className="_2Zhws">
              {products.map((product: IProduct) => (
                <ProductCard key={product.id} link={`/products/${product.id}?product=${product.title.toLowerCase().replace(/ /g, "-")}`} {...product} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export async function getServerSideProps() {
  const products: IProduct[] = [];

  try {
    const response = await fetch("http://localhost:5000/products", { method: "POST" }).then((response) => response.json());
    if (response?.length) products.splice(products.length, 0, ...response);
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      products,
    },
  };
}

export default ProductsPage;
