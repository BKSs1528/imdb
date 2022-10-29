import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from "./Components/header/Header";
import "./App.css"
import Home from "./pages/Home";
import MovieList from "./Components/movieList/MovieList.js";
import Movie from "./pages/Movie";


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/movie/:id" element={<Movie/>}></Route>
          <Route path="/movies/:type" element={<MovieList/>}></Route>
          <Route path="/*" element={<h1>error page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
