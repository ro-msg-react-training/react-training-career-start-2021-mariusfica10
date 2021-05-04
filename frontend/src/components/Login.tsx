import { Button, makeStyles } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Customer from "../models/Customer";
import { AppState } from "../store/store";
import "../styles/login.css";

interface Props {
  customer: Customer;
}

type CustomerType = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const { register, handleSubmit } = useForm<CustomerType>();

  const onSubmit = (data: CustomerType) => {
    console.log("http://localhost:8080/" + data.username + "/" + data.password);
    const url =
      "http://localhost:8080/customers/" + data.username + "/" + data.password;
    axios.get(url).then((res) => {});
  };

  return (
    <div className="main">
      <p className="sign">Sign in</p>
      <form className="form1" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="un "
          type="text"
          id="username"
          placeholder="Username"
          {...register("username")}
        />
        <input
          className="pass"
          type="password"
          id="password"
          placeholder="Password"
          {...register("password")}
        />
        <button type="submit" className="submit">
          Login
        </button>
        <p className="forgot">Forgot Password?</p>
        <p className="register">
          <Link to="/register">Register now!</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
