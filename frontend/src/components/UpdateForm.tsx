import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  Button,
  FormControl,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import Product from "../models/Product";
import axios from "axios";
import { useForm } from "react-hook-form";
import "../styles/formStyle.css";

type ProductItem = {
  productID: number;
  name: string;
  description: string;
  price: number;
  weight: number;
  productCategory: number;
  supplier: string;
  imageurl: string;
};

const UpdateForm = () => {
  const { register, handleSubmit } = useForm<ProductItem>();
  const onSubmit = (data: ProductItem) => {
    const url = "http://localhost:8080/products";
    axios.put(url, data).then((res) => {
      console.log("da");
    });
  };

  const { productID } = useParams<{ productID: string }>();

  const [products, setProducts] = useState<Product>();

  const getProducts = () => {
    const url = "http://localhost:8080/products/" + productID;
    axios.get(url).then((res) => setProducts(res.data));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Typography variant="h4" className="spacing2">
            Update item into shop
          </Typography>
        </div>
        <div className="field">
          <input
            type="text"
            id="productID"
            placeholder="Product ID:"
            value={products?.productID}
            {...register("productID")}
          />
        </div>
        <div className="field">
          <input
            type="text"
            id="name"
            placeholder="Name:"
            value={products?.name}
            {...register("name")}
          />
        </div>
        <div className="field">
          <input
            type="text"
            id="description"
            placeholder="Description: "
            value={products?.description}
            {...register("description")}
          />
        </div>
        <div className="field">
          <input
            type="number"
            id="weight"
            placeholder="Weight: "
            value={products?.weight}
            {...register("weight")}
          />
        </div>
        <div className="field">
          <input
            type="number"
            id="price"
            placeholder="Price"
            value={products?.price}
            {...register("price")}
          />
        </div>
        <div className="field">
          <input
            type="text"
            id="imageurl"
            placeholder="Image url:"
            value={products?.supplier}
            {...register("imageurl")}
          />
        </div>
        <div className="field">
          <input
            type="number"
            id="productCategory"
            placeholder="Product Category"
            value={products?.productCategory}
            {...register("productCategory")}
          />
        </div>
        <div className="field">
          <input
            type="number"
            id="supplier"
            placeholder="Supplier for Product"
            value={products?.supplier}
            {...register("supplier")}
          />
        </div>

        <Button type="submit" className="spacing">
          Save Product
        </Button>
        <Button component={Link} to={"/products"}>
          Back to Products
        </Button>
      </form>
    </div>
  );
};

export default UpdateForm;
