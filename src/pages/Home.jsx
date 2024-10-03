import  { useState, useEffect } from "react";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import noImagePlaceholder from "../assets/images/no-image.jpg";

import { FaShoppingCart } from "react-icons/fa"; // Import cart icon from react-icons

const Home = () => {
  
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // Track visible products

  // Fetch products from products.json
  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  // Load more products on scroll
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        setVisibleCount((prevCount) => Math.min(prevCount + 6, products.length)); // Load 6 more products
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [products]);
  

  return (
    <div className="min-h-screen flex flex-col">
      
      <Header></Header>

      <div className="container mx-auto my-auto">
        {/* Breadcrumbs */}
        <div className="pt-20">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>Showcase</li>
            </ul>
          </div>
        </div>

        {/* <div className="divider"></div> */}

        {/* Split Section */}
        <div className="flex flex-col lg:flex-row gap-5 pt-10">
          {/* Left Side: Products List */}
          <div className="basis-4/6    ">
            <h2 className="text-2xl font-bold mb-4">Products</h2>

            {/* Products would be mapped here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.slice(0, visibleCount).map((product) => (
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
                      <span className={product.quantity > 0 ? "text-green-600" : "text-red-600"}>
                        {product.quantity > 0 ? `${product.quantity} available` : "Out of stock"}
                      </span>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      {/* Price */}
                      <div className="text-lg font-bold text-green-600">₹{product.price.toFixed(2)}</div>

                      {/* Buy Now Button */}
                      <button className="btn btn-sm btn-primary flex items-center gap-2">
                        <FaShoppingCart /> {/* Cart Icon */}
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Add Product Form */}
          <div className="basis-2/6    px-4">
            <h2 className="text-2xl font-bold mb-4">Add Product</h2>
            <form className="space-y-4">
              <div>
                <label className="label" htmlFor="product-name">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  id="product-name"
                  name="productName"
                  placeholder="Product Name"
                  className="input input-sm input-bordered w-full"
                />
              </div>

              <div>
                <label className="label" htmlFor="category">
                  <span className="label-text">Category</span>
                </label>
                <select
                  id="category"
                  name="category"
                  className="select select-sm select-bordered w-full"
                >
                  <option  value="">
                    Select Category
                  </option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  {/* Additional options */}
                </select>
              </div>

              <div>
                <label className="label" htmlFor="image-url">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  id="image-url"
                  name="imageUrl"
                  placeholder="Product image URL"
                  className="input input-sm input-bordered w-full"
                />
              </div>

              <div>
                <label className="label" htmlFor="description">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="textarea input-sm textarea-bordered w-full"
                  placeholder="Product Description"
                ></textarea>
              </div>

              {/* Row for Price and Quantity */}
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="label" htmlFor="price">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="Price"
                    className="input input-sm input-bordered w-full"
                  />
                </div>

                <div className="flex-1">
                  <label className="label" htmlFor="quantity">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    placeholder="Quantity"
                    className="input input-sm input-bordered w-full"
                  />
                </div>
              </div>

              <div>
                <button className="btn btn-sm btn-success w-full" type="submit">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
