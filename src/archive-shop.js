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
  const configFetcher = {};

  const filters = FilterProducts.filters;
  const [products, setProducts] = useState(null);
  const [{ data }, cancelFn] = useCancellableSWR("/jsons/products.json");

  console.log(data);
  useEffect(() => {
    setProducts(data ? data : null);
  }, [data]);

  useEffect(function() {
    const getProductByFilters = autorun(
      reaction => {
        cancelFn.cancel();
        console.log("now");
        mutate("/jsons/products.json");
        JSON.stringify(filters);
      },
      {
        delay: 2500
      }
    );

    return function abort() {
      getProductByFilters();
    };
  }, []);

  return (
    <Container>
      {/*{JSON.stringify(filters)}*/}
      <Breadcrumbs />
      <CurrentFilters />
      {products && <Products products={products.products} />}
    </Container>
  );
});

const Container = styled.div`
  width: 77%;

  > div {
    margin-bottom: 12px;
  }
`;
