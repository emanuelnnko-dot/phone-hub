import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

function ProductList() {

    const [products, setProducts] = useState([]); // Manages products data from the server

    // // Manages product data from user
    const [product, setProduct] = useState({
        name: "",
        brand: "",
        price: "",
        imageUrl: ""
    });

    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get("http://localhost:5000/api/products");
                setProducts(response.data.products);
            } catch (error) {
                setError(error.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    console.log(products);

    // const newProduct = {
    //     name: "iPhone 18",
    //     brand: "Apple",
    //     price: 150000,
    //     imageUrl: ""
    // }

    const handleInput = (e) => {
        setProduct({...product, [e.target.name] : e.target.value});
    }

    console.log(product);

    const addNewProduct = async (e) => {
        console.log("clicked");
        e.preventDefault();
        try {
            // setLoading(true);
            console.log(product);
            const response = await axios.post("http://localhost:5000/api/products", product);
            setProducts({...products, response});
            console.log(response.data.product);

        } catch (error) {
            setError(error.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    }
    // addNewProduct();

    return (
        <>
            <div className='outer-container'>
                 <div>
                    <h1>Kindly choose the phone you like from Phone-Hub</h1>
                    <h3>List of available phones</h3>
                    <div className="products-list">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>

            <form className="product-form" onSubmit={addNewProduct}>
                    <h3>Add new product to the list</h3>
                    <label htmlFor="input-image-url">Image: </label> <br />
                    <input type="text" id="input-image-url" name="imageUrl" value={product.imageUrl} onChange={handleInput} placeholder="Enter image link"/> <br />
                    
                    <label htmlFor="input-phone-name">Name: </label> <br />
                    <input type="text" id="input-phone-name" name="name" value={product.name} onChange={handleInput} placeholder="Enter phone name"/> <br />

                    <label htmlFor="input-brand-name">Brand: </label> <br />
                    <input type="text" id="input-brand-name" name="brand" value={product.brand} onChange={handleInput} placeholder="Enter brand name"/> <br />
                    
                    <label htmlFor="input-phone-price">Price: </label> <br />
                    <input type="text" id="input-phone-price" name="price" value={product.price} onChange={handleInput} placeholder="Enter phone price"/> <br />

                    <button type="submit">Add new product</button>
            </form>

        </>
    )
}

export default ProductList