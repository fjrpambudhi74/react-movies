import Nav from "./components/Header"
import Homepage from "./pages/Movies"
import Favourites from "./pages/Favourites";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={Homepage} />
          <Route path="/favourites" element={Favourites} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
