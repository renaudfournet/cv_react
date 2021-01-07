import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Presentation from "./components/Presentation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Presentation />
    </div>
  );
}

export default App;
