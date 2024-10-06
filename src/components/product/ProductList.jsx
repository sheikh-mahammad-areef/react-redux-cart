import { useState, useEffect } from "react";

import noImagePlaceholder from "../../assets/images/no-image.jpg";
import { FaShoppingCart } from "react-icons/fa"; // Import cart icon from react-icons

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartActions";

function ProductList() {
  const [products, setProducts] = useState([]);

  // Fetch products from products.json
  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  


  const dispacth = useDispatch();
  const handleAddToCart = (product) => {
      console.log(product);
      dispacth(addToCart(product));

  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>

      {/* Products would be mapped here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="card border-solid border border-slate-500 bg-base-100  shadow-xl"
          >
            <div className="indicator absolute top-2 right-2">
              {product.new && (
                <span className="indicator-item badge badge-accent rounded-full text-xs px-2 py-5">
                  New
                </span>
              )}
            </div>

            <figure>
              <img
                src={product.image}
                alt={product.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = noImagePlaceholder;
                }} // Handle image error
              />

              {/* <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        /> */}
            </figure>

            {/* Category Badge */}
            <div className="absolute top-2 left-2">
              <span className="badge  text-white">{product.category}</span>
            </div>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p className="text-sm">{product.description}</p>

              {/* Stock Information */}
              <div className="mt-2 text-sm">
                <span className="font-semibold">Stock : </span>
                <span
                  className={
                    product.quantity > 0 ? "text-green-600" : "text-red-600"
                  }
                >
                  {product.quantity > 0
                    ? `${product.quantity} available`
                    : "Out of stock"}
                </span>
              </div>

              <div className="flex justify-between items-center mt-4">
                {/* Price */}
                <div className="text-lg font-bold text-green-600">
                  ₹{product.price.toFixed(2)}
                </div>

                {/* Buy Now Button */}
                <button onClick={() => handleAddToCart(product)} className="btn btn-sm btn-primary flex items-center gap-2">
                  <FaShoppingCart /> {/* Cart Icon */}
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
