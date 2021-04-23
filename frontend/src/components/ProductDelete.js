import React, { useEffect} from 'react'
import {Button, Card, FormControl} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import '../static/Pr.css'
import axios from 'axios'

const ProductDelete = () =>
{
    
    const  {product_id} = useParams()

    const fetchProducts = () => {
        axios.delete('http://localhost:8080/products/'+ product_id)
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container">
        {
            
            <Card>
                <Card.Header as="h5" className="head"> </Card.Header>
                <Card.Body>

                <Card.Title> Status </Card.Title>
                    <Card.Text>
                    Product was removed successfully!
                    </Card.Text>

                    <Button variant="secondary" className="buttonSpacing">
                    <Link to="/products"> Back to Products </Link>
                    </Button>

                </Card.Body>

            </Card>
            
        }
        </div>

)

};

export default ProductDelete;