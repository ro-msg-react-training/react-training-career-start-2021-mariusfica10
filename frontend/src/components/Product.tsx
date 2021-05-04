import { CardContent, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Product from "../models/Product";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { addToCart } from "../actions/shoppingActions";

interface id {
  productID: string;
}

interface RootState {
  isOn: boolean;
}

const useStyles = makeStyles({
  root: {
    marginLeft: "2%",
    marginRight: "2%",
    marginTop: "2%",
    color: "#133C55",
  },
  paper: {
    textAlign: "center",
    color: "#FFFFFF",
  },
  media: {
    height: 140,
  },
  shift: {
    marginLeft: "5%",
  },
  colorPost: {
    color: "#133C55",
  },
});

const ProductPage = ({ addToCart }: any) => {
  const { productID } = useParams<{ productID: string }>();

  const [products, setProducts] = useState<Product>();

  const getProducts = () => {
    const url = "http://localhost:8080/products/" + productID;
    axios.get(url).then((res) => setProducts(res.data));
  };

  const classes = useStyles();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={classes.root}>
      <h6> Categorie produs: {products?.productCategory} </h6>
      <Typography variant="h4">{products?.name}</Typography>

      <hr></hr>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Grid container spacing={9}>
        <Grid item xs={6}>
          <img src={products?.imageurl} alt="product image" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5"> Description: </Typography>
          <hr></hr>
          <Typography variant="h5">{products?.description}</Typography>
          <br></br>
          <br></br>
          <br></br>

          <Typography variant="h5"> Price: </Typography>
          <hr></hr>
          <Typography variant="h5">{products?.price} euro</Typography>
          <br></br>

          <Typography variant="h5"> Weight: </Typography>
          <hr></hr>
          <Typography variant="h5">{products?.weight}</Typography>
          <br></br>

          <Typography variant="h5"> Stock: </Typography>
          <hr></hr>
          <Typography variant="h5">1234</Typography>
          <br></br>

          <br></br>
          <br></br>
          <br></br>

          <Button onClick={() => addToCart(productID)}>Buy</Button>

          <Button component={Link} to={"/products"}>
            Back to Products
          </Button>

          <Button
            component={Link}
            to={"/products/update/" + products?.productID}
          >
            {" "}
            Edit{" "}
          </Button>

          <Button component={Link} to={"/products/delete/" + productID}>
            Delete
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

const mapDispatchToProps = (
  dispatch: (arg0: { type: string; payload: { id: number } }) => any
) => {
  return {
    addToCart: (id: number) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(ProductPage);
