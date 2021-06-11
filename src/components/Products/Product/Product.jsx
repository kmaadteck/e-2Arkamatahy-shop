import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  /* console.log("Affichage des datas => props product:" + product);
  // console.log("Affichage des items => props Products:" + products);
  return <div>test</div> */

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h6" gutterBottom component="h4">
            {product.name}
          </Typography>
          <Typography variant="h6" component="h4">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        {/* onAddToCart comes from <App.js /> witch is passed over props
           to the first child <Products/> and secondary here. if we use onAddToCart
           directly, it's not gone to know witch thing are we adding... so we have to make 
           a call back function that call itself immediatly and in here we gonna call onAddToCart
           witch has to parameter: product.id and the quantiy = 1 (1 by 1) */}
        <IconButton
          aria-label="Add To Cart"
          onClick={() => onAddToCart(product.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
