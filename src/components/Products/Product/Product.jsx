import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Carousel from 'react-material-ui-carousel'

import useStyles   from './styles';




const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
  
    
    const ProductStock = () => {
        if (!product.is.sold_out)
        {
            return (
                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id,1)}>
                <AddShoppingCart/></IconButton>

            )
        }
        else {
            return (
                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id,1)} disabled>
                <AddShoppingCart/></IconButton>
    
            )
        }
    }

        return (
            <Card className={classes.root}>
                <Carousel autoPlay={false} swipe="true" animation="fade" reverseEdgeAnimationDirection={false} timeout={100}>
                    {product.assets.map((i) => <CardMedia key={i} image={i.url} className={classes.media}  title={product.name} /> )}
                </Carousel>
                <CardContent>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>       
                    <Typography variant="body2" color="textSecondary" dangerouslySetInnerHTML={{__html: product.description}}/>       
                    </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                <Typography variant="h5"  className={classes.leftAlignItem} >
                            {product.price.formatted_with_symbol}
                        </Typography>     
                    <ProductStock/>
                </CardActions>
                
            </Card>

        )
  
}

export default Product
