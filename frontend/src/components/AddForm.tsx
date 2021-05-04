import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../styles/formStyle.css";

import {
  Button,
  FormControl,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { AppState } from "../store/store";
import { fetchCategories, fetchSuppliers } from "../actions/utilsActions";
import Supplier from "../models/Supplier";
import ProductCategory from "../models/ProductCategory";
import { connect } from "react-redux";
import { NavItem } from "react-bootstrap";

type Product = {
  productID: number;
  name: string;
  description: string;
  price: number;
  weight: number;
  productCategory: number;
  supplier: string;
  imageurl: string;
};

interface Prop {
  suppliers: Supplier[];
  fetchSuppliers: any;
  categories: ProductCategory[];
  fetchCategories: any;
}

const AddForm = ({
  suppliers,
  fetchSuppliers,
  categories,
  fetchCategories,
}: Prop) => {
  const { register, handleSubmit } = useForm<Product>();

  useEffect(() => {
    fetchSuppliers();
    fetchCategories();
  }, []);

  const onSubmit = (data: Product) => {
    console.log(data);
    const url = "http://localhost:8080/products/save";
    axios.post(url, data).then((res) => {
      console.log("da");
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Typography variant="h4" className="spacing2">
            Insert item into shop
          </Typography>
        </div>
        <div className="field">
          <input
            type="text"
            id="name"
            placeholder="Name:"
            {...register("name")}
          />
        </div>
        <div className="field">
          <input
            type="text"
            id="description"
            placeholder="Description: "
            {...register("description")}
          />
        </div>
        <div className="field">
          <input
            type="text"
            id="weight"
            placeholder="Weight: "
            {...register("weight")}
          />
        </div>
        <div className="field">
          <input
            type="text"
            id="price"
            placeholder="Price"
            {...register("price")}
          />
        </div>
        <div className="field">
          <input
            type="text"
            id="imageurl"
            placeholder="Image url:"
            {...register("imageurl")}
          />
        </div>
        <div className="field">
          <InputLabel id="demo-simple-select-label">
            Select Product Category
          </InputLabel>
          <Select
            id="productCategory"
            className="selector"
            {...register("productCategory")}
          >
            {categories.map((elem, index) => {
              return (
                <option value={elem.productCategoryID}>{elem.name}</option>
              );
            })}
          </Select>
          <InputLabel id="demo-simple-select-label">Select Supplier</InputLabel>

          <Select id="supplier" className="selector" {...register("supplier")}>
            {suppliers.map((elem, index) => {
              return <option value={elem.supplierID}>{elem.name}</option>;
            })}
          </Select>
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

const mapStateToProps = (state: AppState) => {
  return {
    suppliers: state.utils.suppliers,
    categories: state.utils.categories,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchSuppliers: () => dispatch(fetchSuppliers()),
    fetchCategories: () => dispatch(fetchCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
