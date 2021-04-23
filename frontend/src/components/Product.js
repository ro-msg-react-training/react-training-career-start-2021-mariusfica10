import React, {useState, useEffect} from 'react'
import {Button, Card, FormControl} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import '../static/Pr.css'
import axios from 'axios'

const Product = () =>
{
    
    const  {product_id} = useParams()

    const [product, setProduct] = useState([])

    const fetchProducts = () => {
        axios.get('http://localhost:8080/products/'+ product_id).then(
            res =>        
            {
                setProduct(res.data)
            }
            );

    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container">
        {
            
            <Card>
                <Card.Header as="h5" className="head"> ID category: {product.productCategory} </Card.Header>
                <Card.Body>


                <div className="float-container">
                    
                <div className="float-child">
                <div>

                <Card.Title> {product.name} </Card.Title>
                    <Card.Text>
                    {product.description}
                    </Card.Text>

                    <Card.Text>
                    {product.price} euro
                    </Card.Text>

                    <Card.Text>
                    Current Stock for this product is: XXX

                    <FormControl type="text" placeholder="Enter number of products you want" className="mr-sm-2" />

                    </Card.Text>

            
                    <Button variant="secondary" className="buttonSpacing">
                    <Link to="/products"> Add to Cart </Link>
                    </Button>

                    <Button variant="secondary" className="buttonSpacing">
                    <Link to="/products"> Back to Products </Link>
                    </Button>

                    <Button variant="secondary" className="buttonSpacing">
                    <Link to={"/products/del/" + product_id}> Delete  </Link>
                    </Button>

                </div>
                </div>

                <div className="float-child">
                <div>
                <Card.Img variant="top" src={product.imageurl}  className="ImageProduct"/>
                    
                </div>
                </div>

                </div>

                </Card.Body>

            </Card>
            
        }
        </div>

)

};

export default Product;