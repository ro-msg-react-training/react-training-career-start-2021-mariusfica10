import axios from "axios";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Product from "../models/Product";
import { Link } from "react-router-dom";
import { AppState } from "../store/store";
import { fetchProducts } from "../actions/shoppingActions";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft: "2%",
    marginRight: "2%",
    marginTop: "2%",
    flexWrap: "wrap",
  },
  media: {
    height: 140,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

interface Prop {
  products: Product[];
  fetchProducts: any;
}

const Products = ({ products, fetchProducts }: Prop) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container>
        {
          //Object.keys.map((elem,index)

          products.map((elem, index) => {
            return (
              <Grid item xs={3} key={index}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={elem.imageurl}
                      title={"Product id:" + elem.productID}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {elem.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {elem.description}
                      </Typography>
                      <Typography
                        variant="h5"
                        color="textSecondary"
                        component="p"
                      >
                        {elem.price} lei
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      component={Link}
                      to={"/products/" + elem.productID}
                    >
                      Buy
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      component={Link}
                      to={"/products/" + elem.productID}
                    >
                      Reviews
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })
        }
      </Grid>
      <Button component={Link} to="/products/add/item">
        Add product
      </Button>
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    products: state.shop.products,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
