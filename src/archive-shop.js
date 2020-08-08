import React, { useEffect, useState } from "react";

import SideBar from "./sidebar";
import styled from "styled-components";
import CurrentFilters from "./current-filters";
import Breadcrumbs from "./breadcrumbs";
import Products from "./products";
import FilterProducts from "./classes/filters-products";
import useSWR, { mutate, SWRConfig } from "swr";

import { observer } from "mobx-react";
import { autorun } from "mobx";

import { useCancellableSWR } from "./classes/utils";

export default observer(function ArchiveShop(props) {
  const configFetcher = (...args) => fetch(...args).then((res) => res.json());

  const filters = FilterProducts.filters;
  const { data } = useSWR(
    `https://flash-photo.co.il/wp-json/wc/v3/products?consumer_key=ck_c6cfb8e020dc8e02bbec6ac95d44b1d71d19a28c&consumer_secret=cs_ce156e48f38530f17bef50e60ab1967e13f4fc83`,
    configFetcher
  );
  // const [{ data }, cancelFn] = useCancellableSWR("/jsons/products.json");
  const [products, setProducts] = useState(data || false);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  useEffect(function () {
    const getProductByFilters = autorun(
      (reaction) => {
        //mutate("/jsons/products.json");
        JSON.stringify(filters);
      }
      // ,
      //   delay:5000
      // }
    );

    return function abort() {
      getProductByFilters();
    };
  }, []);

  return (
    <Container>
      {JSON.stringify(filters)}
      <Breadcrumbs />
      <CurrentFilters />
      {products && <Products products={products} />}
    </Container>
  );
});

const Container = styled.div`
  width: 77%;

  > div {
    margin-bottom: 12px;
  }
`;

var requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch(
  "https://flash-photo.co.il/wp-json/wc/v3/products?per_page=16&page=3&consumer_key=ck_c6cfb8e020dc8e02bbec6ac95d44b1d71d19a28c&consumer_secret=cs_ce156e48f38530f17bef50e60ab1967e13f4fc83",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
