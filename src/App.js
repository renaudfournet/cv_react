import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Realisation from "./components/Realisation";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Presentation />
      <Realisation />
      <Contact />
    </div>
  );
}

export default App;
