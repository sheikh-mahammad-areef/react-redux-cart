import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/product/productSlice";

function ProductForm() {
  // useForm hook from react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  // Form submit handler
  const onSubmitFun = (productData) => {
    console.log("Form Data:", productData);
    // Handle form submission (e.g., send data to an API)
    dispatch(addProduct(productData));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit(onSubmitFun)} className="space-y-4">
        <div>
          <label className="label" htmlFor="product-name">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            id="product-name"
            {...register("productName", {
              required: "Product name is required",
              minLength: {
                value: 5,
                message: "Product name must be at least 5 characters"
              },
              maxLength: {
                value: 25,
                message: "Product name should not exceed 25 characters"
              },
            })}
            placeholder="Product Name"
            className={`input input-sm input-bordered w-full ${
              errors.productName ? "border-red-500" : ""
            }`}
          />
          {errors.productName && (
            <span className="text-red-500 text-sm">
              {errors.productName.message}
            </span>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="label" htmlFor="category">
            <span className="label-text">Category</span>
          </label>
          <select
            id="category"
            {...register("category", { required: "Category is required" })}
            className={`select select-sm select-bordered w-full ${errors.category ? 'border-red-500' : ''}`}
          >
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            {/* Additional options */}
          </select>
          {errors.category && (
            <span className="text-red-500 text-sm">{errors.category.message}</span>
          )}
        </div>

        {/* Image URL */}
        <div>
          <label className="label" htmlFor="image-url">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            id="image-url"
            {...register("imageUrl", {  })}
            placeholder="Product image URL"
            className={`input input-sm input-bordered w-full ${errors.imageUrl ? 'border-red-500' : ''}`}
          />
          {errors.imageUrl && (
            <span className="text-red-500 text-sm">{errors.imageUrl.message}</span>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="label" htmlFor="description">
            <span className="label-text">Description</span>
          </label>
          <textarea
            id="description"
            {...register("description", { required: "Description is required" })}
            className={`textarea input-sm textarea-bordered w-full ${errors.description ? 'border-red-500' : ''}`}
            placeholder="Product Description"
          ></textarea>
          {errors.description && (
            <span className="text-red-500 text-sm">{errors.description.message}</span>
          )}
        </div>

        {/* Row for Price and Quantity */}
        <div className="flex space-x-4">
          {/* Price */}
          <div className="flex-1">
            <label className="label" htmlFor="price">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              id="price"
              {...register("price", {
                required: "Price is required",
                min: { value: 0, message: "Price cannot be negative" },
              })}
              placeholder="Price"
              className={`input input-sm input-bordered w-full ${errors.price ? 'border-red-500' : ''}`}
            />
            {errors.price && (
              <span className="text-red-500 text-sm">{errors.price.message}</span>
            )}
          </div>

          {/* Quantity */}
          <div className="flex-1">
            <label className="label" htmlFor="quantity">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              id="quantity"
              {...register("quantity", {
                required: "Quantity is required",
                min: { value: 1, message: "Quantity must be at least 1" },
              })}
              placeholder="Quantity"
              className={`input input-sm input-bordered w-full ${errors.quantity ? 'border-red-500' : ''}`}
            />
            {errors.quantity && (
              <span className="text-red-500 text-sm">{errors.quantity.message}</span>
            )}
          </div>
        </div>

        <div>
          <button className="btn btn-sm btn-success w-full" type="submit">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
