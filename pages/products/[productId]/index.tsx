import React from "react";
import { GetServerSidePropsResult, GetServerSidePropsContext } from "next";

import { IProduct } from "../../../typescript/product/types";

const ProductPage = ({ product }: IProps) => {
  const { title } = product;

  return (
    <main className="_4_JdX _1AQ9-">
      <div className="_2ezKP LkBmC _3AP5M">
        <h1 className="_2b45P">{title}</h1>
      </div>
      <div className="I1Lsq _1yfX5 _2rRrS" style={{ transitionDelay: "800ms" }}></div>
    </main>
  );
};

interface IProps {
  product: IProduct;
}

export async function getServerSideProps({ params }: GetServerSidePropsContext): Promise<GetServerSidePropsResult<IProps> | void> {
  const productId = params?.productId;

  try {
    const product = await fetch("http://localhost:5000/products/" + productId, { method: "POST" }).then((response) => response.json());

    return {
      props: { product },
    };
  } catch (error) {
    console.error(error);
  }
}

export default ProductPage;
