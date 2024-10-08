
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import ProductList from "../components/product/ProductList";
import ProductForm from "../components/product/ProductForm";

const Home = () => {

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
            <ProductList></ProductList>
          </div>

          {/* Right Side: Add Product Form */}
          <div className="basis-2/6    px-4">
            <ProductForm></ProductForm>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
