import { Button, ButtonGroup, InputBase, makeStyles } from "@material-ui/core";
import React from "react";
import { isPropertySignature } from "typescript";
import CartItem from "../models/CartItem";
import Product from "../models/Product";
import "../styles/cartStyle.css";
import { connect } from "react-redux";
import {
  addToCart,
  removeFromCart,
  adjustQuantity,
} from "../actions/shoppingActions";
const useStyles = makeStyles({
  btnSpacing: {
    marginLeft: "10%",
  },
});

const CartItemView: React.FC<{
  objItem: CartItem;
  objProduct: Product;
  removeFromCart: any;
  updateQuantity: any;
}> = (props) => {
  const classes = useStyles();

  return (
    <div className="cartItem">
      <img
        className="cartItem__image"
        src={props.objProduct.imageurl}
        alt={props.objProduct.name}
      />
      <div className="cartItem__details">
        <p className="details__title"> {props.objProduct.name} </p>
        <p className="details__desc"> {props.objProduct.description}</p>
        <p className="details__price"> {props.objProduct.price} lei </p>
        <p className="cartItem__qty">
          Quantity: {props.objItem.quantity}
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
            className={classes.btnSpacing}
          >
            <Button>-</Button>
            <Button
              onClick={() =>
                props.updateQuantity(
                  props.objItem.productID,
                  props.objItem.quantity + 1
                )
              }
            >
              +
            </Button>
          </ButtonGroup>
        </p>
      </div>
      <div className="cartItem__actions">
        <button
          className="actions__deleteItemBtn"
          onClick={() => props.removeFromCart(props.objItem.productID)}
        >
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (
  dispatch: (arg0: { type: string; payload: any }) => any
) => {
  return {
    removeFromCart: (id: number) => dispatch(removeFromCart(id)),
    updateQuantity: (id: number, value: number) =>
      dispatch(adjustQuantity(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItemView);
