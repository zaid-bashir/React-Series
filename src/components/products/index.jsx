import { React, useState, useEffect } from 'react'
import './style.css'
function ProductComponent(props) {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");



    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            setProducts([]);
            setError("");
            const response = await fetch('https://fakestoreapi.com/products', { method: 'GET' });
            const data = await response.json()
            if (response.status !== 200) {
                alert(data.message || 'Could Not Fetch Products');
                setProducts([]);
                setIsLoading(false);
                setError(data.message || 'Could Not Fetch Products');
                return;
            }
            setProducts(data);
            setIsLoading(false);
            setError("");
        }

        // Call the fetch function
        fetchProducts();
    }, []);


    return (
        <div className="products">
            {
                isLoading ? <div className="loading-container">
                    <div className="spinner"></div>
                </div> : error != "" ? <div className="error">{error}</div> : <div className="products-container">
                    {products.map(product => (
                        <div className="product-card" key={product.id}>
                            <img src={product.image} alt={product.title} className="product-image" />
                            <div className="product-details">
                                <h2 className="product-title">{product.title}</h2>
                                <p className="product-price">${product.price}</p>
                                <p className="product-description">{product.description}</p>
                                <p className="product-category">Category: {product.category}</p>
                                <p className="product-rating">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                            </div>
                        </div>
                    ))}
                </div>
            }

        </div>
    )
}

export default ProductComponent