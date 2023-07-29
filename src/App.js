import Home from "./screens/Home";
import Login from "./screens/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import './index.css';
import Signup from "./screens/Signup";
import { Cartdata } from "./components/ContextReducer";
// import Cart from "./screens/Cart";

function App() {
  return (
    <Cartdata> {/* Wrapping the application with the Cartdata Context Provider */}
      <Router> {/* Setting up the Router for handling navigation */}
        <div>
          <Routes> {/* Setting up the Routes for different pages */}
            {/* Route for the Home page */}
            <Route exact path="/" element={<Home />} />
            {/* Route for the Login page */}
            <Route exact path="/login" element={<Login />} />
            {/* Route for the Signup page */}
            <Route exact path="/signup" element={<Signup />} />
            {/* Route for the Cart page */}
            {/* <Route exact path="/cart" element={<Cart />} /> */}
          </Routes>
        </div>
      </Router>
    </Cartdata>
  );
}

export default App;
