import './App.css';
import { RecentBook } from './RecentBook';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Link to = "/" className = "title"><h1>Buk klab</h1></Link>
     <Link to="/members" className="navbar">Members</Link>
     <Link to="/recentbook" className="navbar">RecentBook</Link>
     <Link to="/bookslist" className="navbar">BooksList</Link>

    <RecentBook />

    </div>
  );
}

export default App;
