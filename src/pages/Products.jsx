
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load products. Check your backend server.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center p-10">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center p-10 text-red-600">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10">
        Our Phone Collection
      </h1>

      {products.length === 0 ? (
        <p className="text-center">No products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md p-5"
            >
              <img
                src={product.image || "https://placehold.co/300x300?text=Phone"}
                alt={product.phonename || product.name || "Phone"}
                className="w-full h-56 object-contain"
              />

              <h2 className="text-xl font-bold mt-4">
                {product.phonename || product.name}
              </h2>

              <p className="text-gray-600 mt-2">{product.brand}</p>

              <p className="text-green-700 font-bold mt-2">
                {product.price != null
                  ? `KSh ${Number(product.price).toLocaleString("en-KE")}`
                  : "Price unavailable"}
              </p>

              <Link
                to={`/Products/${product.id}`}
                className="block text-center bg-green-600 text-white rounded-lg py-3 mt-5 hover:bg-green-700"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
