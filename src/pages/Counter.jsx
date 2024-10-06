
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import CounterComponent from "../components/other/Counter";

const Counter = () => {

  return (
    <div className="min-h-screen flex flex-col">
      
      <Header></Header>

      <div className="container mx-auto my-auto">
        {/* Breadcrumbs */}
        <div className="pt-10">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/counter">Counter</a>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="divider"></div> */}

        {/* Split Section */}
        <div className="flex  lg:flex-row gap-5 pt-10">
            <CounterComponent></CounterComponent>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Counter;
