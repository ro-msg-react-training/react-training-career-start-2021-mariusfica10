import React, { useEffect, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { AppState } from "../store/store";
import CartItem from "../models/CartItem";
import Product from "../models/Product";
import CartItemView from "./CartItem";
import "../styles/cartFinal.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      color: "#133C55",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  })
);

interface Props {
  products: Product[];
  cart: CartItem[];
}

const Cart = ({ products, cart }: Props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let price = 0;
    let items = 0;

    cart.forEach((item) => {
      items += item.quantity;
      price +=
        products.filter((i) => i.productID == item.productID)[0].price *
        item.quantity;
    });

    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  const classes = useStyles();
  return (
    <div className="cart">
      <div className="cart__items">
        {cart.map((item) => (
          <CartItemView
            objItem={item}
            objProduct={
              products.filter((i) => i.productID == item.productID)[0]
            }
          />
        ))}
      </div>
      <div className="cart__summary">
        <h4 className="summary__title">Cart Summary</h4>
        <div className="summary__price">
          <span> Total products: {totalItems} </span>
          <span> Total price: {totalPrice} </span>
        </div>
        <button className="summary__checkoutBtn">
          <Link to="/order">Proceed To Checkout </Link>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    products: state.shop.products,
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
