import React from "react";
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

type Customer = {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
};

const Register = () => {
  const { register, handleSubmit } = useForm<Customer>();
  const onSubmit = (data: Customer) => {
    const url = "http://localhost:8080/customers/save";
    axios.post(url, data).then((res) => {
      console.log("da");
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Typography variant="h4" className="spacing2">
            Register Account Now !
          </Typography>
        </div>
        <div className="field">
          <input
            type="text"
            id="firstname"
            placeholder="firstname:"
            {...register("firstname")}
          />
        </div>
        <div className="field">
          <input
            type="text"
            id="lastname"
            placeholder="lastname: "
            {...register("lastname")}
          />
        </div>
        <div className="field">
          <input
            type="text"
            id="username"
            placeholder="username: "
            {...register("username")}
          />
        </div>
        <div className="field">
          <input
            type="password"
            id="password"
            placeholder="password"
            {...register("password")}
          />
        </div>
        <div className="field">
          <input
            type="text"
            id="email"
            placeholder="email:"
            {...register("email")}
          />
        </div>

        <Button type="submit" className="spacing">
          Save
        </Button>
        <Button component={Link} to={"/products"}>
          Back to Products
        </Button>
      </form>
    </div>
  );
};

export default Register;
