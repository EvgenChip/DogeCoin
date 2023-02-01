import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import axios from "axios";
import data from "./API/data.js";
import { Cards } from "./components/Cards/Cards";
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Cards />
    </div>
  );
}

export default App;
