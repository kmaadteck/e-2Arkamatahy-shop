import React from 'react';
import { Button, Card, CardActions, CardContent,CardMedia, Typography } from "@material-ui/core";
import useStyles from "./styles";


const CartItem = ({item}) => {

    const classes = useStyles();


    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h5">{item.name}</Typography>
                <Typography variant="h6">{item.line_total.formatted_with_symbol}</Typography>
                <CardActions className={classes.cardActions}>
                    <div className={classes.buttons}></div>

                </CardActions>

            </CardContent>
            
        </Card>
    )
}

export default CartItem

