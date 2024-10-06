import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/Home';
import NotFound from "./pages/NotFound";
import ServerError from "./pages/ServerError";
import CounterPage from "./pages/Counter";
import CartPage from "./pages/cart";

const AppRouter  = ()  => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/counter" element={<CounterPage />} />
                <Route path="/500" element={<ServerError />} />
                <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
            </Routes>
        </Router>
    );
}


export default AppRouter;