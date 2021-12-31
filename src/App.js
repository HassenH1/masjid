import Navbar from "./component/navbar/Navbar";
import Home from "./screens/home/Home";
import Footer from "./component/footer/Footer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
