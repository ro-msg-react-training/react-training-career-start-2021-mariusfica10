import { Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { AppState } from "../store/store";
import CartItem from "../models/CartItem";
import { useForm } from "react-hook-form";
import axios from "axios";
import { changeOrder } from "../actions/shoppingActions";

interface Props {
  cart: CartItem[];
}

type OrderItem = {
  locationID: number;
  customerID: number;
  date: string;
  countryAdress: string;
  cityAdress: string;
  countyAdress: string;
  streetAdress: string;
};

interface Order {
  orderID: number;
  locationID: number;
  customerID: number;
  date: string;
  countryAdress: string;
  cityAdress: string;
  countyAdress: string;
  streetAdress: string;
}

function getCurrentDate(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
}

const Order = ({ cart }: Props) => {
  const { register, handleSubmit } = useForm<OrderItem>();
  const onSubmit = (data: OrderItem) => {
    console.log(data);
    const url = "http://localhost:8080/orders";
    axios.post<Order>(url, data).then((res) => {
      changeOrder(res.data.orderID);
    });
    const url2 = "http://localhost:8080/orders/done";
    axios.post(url2, cart).then((res) => {
      console.log("da");
    });
  };
  console.log(cart.length);
  return (
    <div>
      <Typography variant="h3">Check out the order</Typography>
      <br></br>
      <br></br>
      <hr></hr>
      <Typography variant="h4">Your items</Typography>
      <br></br>
      <br></br>

      {cart.map((elem, index) => {
        return (
          <div>
            <Typography variant="h5">
              {index + 1}. {"   "} item: {elem.productID} quantity:{" "}
              {elem.quantity}{" "}
            </Typography>
            <hr></hr>
          </div>
        );
      })}
      <div>
        <br></br>
        <br></br>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Typography variant="h4" className="spacing2">
              Final step for realising the order
            </Typography>
          </div>
          <div className="field">
            <input
              type="text"
              id="locationID"
              placeholder="Location ID:"
              {...register("locationID")}
            />
          </div>
          <div className="field">
            <input
              type="text"
              id="customerID"
              placeholder="customer ID: "
              {...register("customerID")}
            />
          </div>
          <div className="field">
            <input
              type="text"
              id="date"
              placeholder="date: "
              //2014-08-18T21:11:54
              {...register("date")}
            />
          </div>
          <div className="field">
            <input
              type="text"
              id="countryAdress"
              placeholder="countryAdress: "
              {...register("countryAdress")}
            />
          </div>
          <div className="field">
            <input
              type="text"
              id="cityAdress"
              placeholder="cityAdress: "
              {...register("cityAdress")}
            />
          </div>

          <div className="field">
            <input
              type="text"
              id="countyAdress"
              placeholder="countyAdress"
              {...register("countyAdress")}
            />
          </div>

          <div className="field">
            <input
              type="text"
              id="streetAdress"
              placeholder="streetAdress: "
              {...register("streetAdress")}
            />
          </div>

          <Button type="submit"> Finish Order </Button>
        </form>

        <br></br>
        <br></br>
      </div>
    </div>
  );
};
const mapStateToProps = (state: AppState) => {
  return {
    cart: state.shop.cart,
  };
};

const mapDispatchToProps = (
  dispatch: (arg0: { type: string; payload: any }) => any
) => {
  return {
    changeOrder: (id: number) => dispatch(changeOrder(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
