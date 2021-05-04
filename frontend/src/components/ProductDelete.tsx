import classes from "*.module.css";
import { Button, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Product from "../models/Product";

const useStyles = makeStyles({
  root: {
    marginLeft: "2%",
    marginRight: "2%",
    marginTop: "2%",
    color: "#133C55",
  },
});

const ProductDelete = () => {
  const { productID } = useParams<{ productID: string }>();

  const getProducts = () => {
    axios.delete("http://localhost:8080/products/" + productID);
  };

  const classes = useStyles();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h3">Status: Product deleted!</Typography>
      <Button component={Link} to="/products">
        Back to Cart
      </Button>
    </div>
  );
};

export default ProductDelete;
