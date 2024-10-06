import { useSelector, useDispatch } from "react-redux";
import {
  updateCartProductQuantity,
  removeFromCart,
} from "../redux/cart/cartActions";
import {
  selectCartProducts,
  selectCartTotalPrice,
  selectCartTotalQuantity,
} from "../redux/cart/cartSlice";
import { FaTrashAlt } from "react-icons/fa";
import noImagePlaceholder from "../assets/images/no-image.jpg";


import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";

function CartPage() {
  const dispatch = useDispatch();

  // Select products, total price, and total quantity from the store
  const cartProducts = useSelector(selectCartProducts);
  const totalPrice = useSelector(selectCartTotalPrice);
  const totalQuantity = useSelector(selectCartTotalQuantity);

  // Handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    dispatch(updateCartProductQuantity(id, newQuantity));
  };

  // Handle product removal
  const handleRemoveProduct = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header></Header>

      <div className="container mx-auto py-10">
        {/* Breadcrumbs */}
        <div className="text-sm breadcrumbs mb-6">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Left Section - Cart Items */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-6">
              My Cart ({cartProducts.length})
            </h1>

            {cartProducts.length === 0 ? (
              <div className="text-center">
                <p className="text-lg">Your cart is currently empty.</p>
              </div>
            ) : (
              cartProducts.map((product,index) => (
                <div
                  key={product.id}
                  className={`shadow-md border-b-2 p-4 mb-4 ${index === cartProducts.length - 1 ? 'border-b-0' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-md"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = noImagePlaceholder; // Fallback for missing image
                      }}
                    />

                    <div className="ml-4 flex-1">
                      <h2 className="text-xl font-semibold">{product.name}</h2>
                      <p className="text-sm text-gray-500">
                        Size: {product.size}
                      </p>
                      <p className="text-sm text-gray-500">
                        Seller: {product.seller}
                      </p>

                      <div className="flex items-center mt-2">
                        <span className="text-lg font-bold ">
                          ₹{product.price.toFixed(2)}
                        </span>

                        {/* Quantity Controls */}
                        <div className="ml-4 flex items-center">
                          <button
                            className="btn btn-sm btn-outline"
                            onClick={() =>
                              handleQuantityChange(
                                product.id,
                                product.quantity - 1
                              )
                            }
                            disabled={product.quantity <= 1}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={product.quantity}
                            readOnly
                            className="mx-2 w-12 text-center border rounded"
                          />
                          <button
                            className="btn btn-sm btn-outline"
                            onClick={() =>
                              handleQuantityChange(
                                product.id,
                                product.quantity + 1
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <div className="flex flex-col items-end">
                      <button
                        className="text-red-500 hover:underline text-sm"
                        onClick={() => handleRemoveProduct(product.id)}
                      >
                        <FaTrashAlt className="inline-block mr-1" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}

            <div className="flex justify-between mt-6">
              <Link to="/" className="btn btn-outline">
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Right Section - Order Summary */}
          <div className="w-full lg:w-1/3  shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">PRICE DETAILS</h2>

            <div className="flex justify-between mb-2">
              <span>Total Items ({totalQuantity}):</span>
              <span className="font-bold">₹{totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Delivery Charges:</span>
              <span className="font-bold text-green-500">FREE</span>
            </div>

            <div className="flex justify-between text-lg font-semibold border-t pt-4">
              <span>Amount Payable:</span>
              <span className="font-bold">₹{totalPrice.toFixed(2)}</span>
            </div>

            <button className="btn btn-primary w-full mt-6">Place Order</button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default CartPage;
