import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route exact path = '/' element = {<Home />}/>
        <Route path = '/cart' element = {<Cart />}/>
      </Routes>
      
    </div>
  );
}

export default App;
