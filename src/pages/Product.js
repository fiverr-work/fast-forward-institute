import React from "react";

import Breadcrumb from "../components/Breadcrumb";

const Product = () => {
  return (
    <>
      <Breadcrumb
        prevLink="/books"
        prevPages={["home", "books"]}
        active="THE EFFICIENCY OF SUCCESS"
      />
      Product
    </>
  );
};

export default Product;
