import React, { useState } from "react";

import PageSpinner from "../../components/PageLoader";
import ProductCard from "../../components/ProductCard";

const ProductsPage = () => {
  const [state, _setState] = useState({
    products: [],
    loading: true,
  });

  return (
    <main className="_4_JdX _1AQ9-">
      <div className="_2ezKP LkBmC _3AP5M">
        <h1 className="_2b45P">Products</h1>
      </div>
      <div className="I1Lsq _1yfX5 _2rRrS" style={{ transitionDelay: "800ms" }}>
        {state.loading ? (
          <PageSpinner />
        ) : (
          <section className="_13dOJ">
            <div className="_2ezKP _2Vnfd _3AP5M">
              <div className="_2Zhws">
                {state.products.map((product: { id: string; title: string; price: number; imageUrl: string }) => (
                  <ProductCard key={product.id} link={"/products/" + product.title} {...product} />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductsPage;
