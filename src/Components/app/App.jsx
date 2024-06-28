import Home from '../Home/Home';
import Product from '../Product/Product';
import Kupon from "../kupon/Kupon";
import Clients from "../Clients/Clients";
import FAQ from "../FAQ/Faq";
import Question from "../Question/Question";
import Social from "../Social/Social"
import Footer from "../Footer/Footer"
import "./app.scss"

function App() {
  return (
    <div className="App">
      <Home />
      <Product />
      <Kupon />
      <Clients />
      <FAQ />
      <Question />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
