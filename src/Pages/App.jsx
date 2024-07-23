import "../App.css";
import { RecentBook } from "./RecentBook";
import { NavBar} from "../Components/NavBar";
import "../navbar.css";

function App() {

  return (
    <div className="App">
      <NavBar />

      <RecentBook />
    </div>
  );
}

export default App;
