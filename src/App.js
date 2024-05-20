import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
// import FrontPage from "./components/frontpage/frontpage";
import Login from "./components/loginPage/login";
import PrdList from "./components/product/prdListing/prdList";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const handleUpdateChild = (newVal) => {
    if (newVal === "pass") {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div className="App">
      {!show && <Login onValChange={handleUpdateChild} />}
      {show && (
        <>
          <Header onValChange={handleUpdateChild} />
          {/* <FrontPage /> */}
          <PrdList />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
