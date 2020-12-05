import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Informations from "./component/Informations";
import Name from "./component/Name";
import Xp from "./Xp";

function App() {
  return (
    <div className="App">
      <Name name="Renaud Fournet" />
      <Informations />
      <Xp />
    </div>
  );
}

export default App;
