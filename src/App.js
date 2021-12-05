// import "./App.css";
import Navbar from "./component/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import Donate from "./screens/donate/Donate";
import Footer from "./screens/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/donate">
          <Donate />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
