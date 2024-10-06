import "../App.css";
import { RecentBook } from "./RecentBook";
import { NavBar} from "../Components/NavBar";
import "../Styling/navbar.css";
import { FloatingLetters } from "../Components/FloatingLetters";

function App() {

  return (
    <div className="App">
      <NavBar />
      <section className = "landing-section">
      <div className="section-title">
      <p>buk klab</p>
      </div>
      <div className="divtest">
      <FloatingLetters />
      </div>
      </section>

      <RecentBook />
    </div>
  );
}

export default App;
