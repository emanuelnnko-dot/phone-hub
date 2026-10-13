
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Product not found");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not find this product.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center p-10">Loading product...</p>;
  }

  if (error) {
    return (
      <div className="text-center p-10">
        <p className="text-red-600">{error}</p>
        <Link to="/Products" className="text-green-700 underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="max-w-5xl mx-auto">
        <Link to="/Products" className="text-green-700 hover:underline">
          &larr; Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 bg-white rounded-xl shadow-md p-6">
          <img
            src={product.image || "https://placehold.co/400x400?text=Phone"}
            alt={product.phonename || product.name || "Phone"}
            className="w-full h-80 object-contain"
          />

          <div>
            <p className="text-green-700">{product.brand}</p>

            <h1 className="text-3xl font-bold mt-3">
              {product.phonename || product.name}
            </h1>

            <p className="text-2xl font-bold text-green-700 mt-5">
              {product.price != null
                ? `KSh ${Number(product.price).toLocaleString("en-KE")}`
                : "Price unavailable"}
            </p>

            <p className="text-gray-600 mt-5">
              {product.description || "No description available."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
