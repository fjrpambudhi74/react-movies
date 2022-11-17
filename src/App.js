import Nav from "./components/Header"
import Movies from "./pages/Movies";
import Favourites from "./pages/Favorites";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Movies />} />
          <Route path="/favorites" element={<Favourites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
