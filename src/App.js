
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route,Routes} from "react-router-dom";
import Recipes from "./components/Recipes";
import Hero from "./components/Hero";
import Meat from "./components/Meat";
import About from "./components/About";
import Blog from "./components/Blog";
import Support from "./components/Support";
import Signin from "./components/Signin";

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path={"/"} element={ <Hero/> }/>
          <Route path={"/recipes"} element={ <Recipes/> }/>
          <Route path={"/meat"} element={ <Meat/> }/>
          <Route path={"/about"} element={ <About/> }/>
          <Route path={"/blog"} element={ <Blog/> }/>
          <Route path={"/support"} element={ <Support/> }/>
          <Route path={"/signin"} element={ <Signin/> }/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
