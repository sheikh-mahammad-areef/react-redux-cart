import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import ServerError from "./pages/ServerError";


const AppRouter  = ()  => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/500" element={<ServerError />} />
                <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
            </Routes>
        </Router>
    );
}


export default AppRouter;