import React, {useState, useEffect} from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../static/Product.css';
import axios from 'axios'

const Products = () =>
{
    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        axios.get("http://localhost:8080/products").then(
            res =>        
                setProducts(res.data)
            );

    };

    useEffect(() => {
        fetchProducts();
    }, []);



    return (
            
        <div className="Products">
        
            {
                //Object.keys.map((elem,index)
                   
                products.map((elem,index)=>{

                    console.log(elem)
                    return(                      
                        <div className="Product" key={index}>
                            <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src= {elem.imageurl} className="Image"/>
                            <Card.Body>
                            <Card.Title>{elem.name.slice(0,16)} </Card.Title>
                            <Card.Text>
                                    {elem.price} euro
                            </Card.Text>
                            </Card.Body>
                            <Card.Body>
                            <Card.Link> <Link to={'/products/' + elem.productID}> Show item </Link> </Card.Link>
                            <Card.Link> <Link to={'/products/' + elem.productID}> Add to cart </Link></Card.Link>
                            </Card.Body>
                            </Card>
                        </div>
                    );
                })
                
            }
        </div>

    )

};

export default Products;