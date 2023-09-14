import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/products";
import ProductCard from "./ProductCard";
import { Navbar } from "./Navbar";

export default function ProductsList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    /* eslint-disable-next-line */
  }, []);
  const products = useSelector((state) => state.products.products);
  return (
    <div>
      <Navbar />
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 5, sm: 5, md: 5 }}>
          {products && products.map((el) => <ProductCard el={el} />)}
        </Grid>
      </Box>
    </div>
  );
}
