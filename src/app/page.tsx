import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/product";
import Sale from "./components/Sale";

function Homepage(){
  return (
    <div className="sm:640px bg-fuchsia-200">
      <Header />
      <Hero />
      <Sale />
      <Products />
      <Footer />
    </div>
  )
}
export default Homepage; 