import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Component/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AllMovies from './Component/Movies/AllMovies';
import Tv from './Component/Tv/Tv';
import Header from './Component/Header/Header';
import SingleMovie from './Component/MovieId/SingleMovie';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<Router>
<Header></Header>
 <Routes>

  <Route path='/' exact element={<Home></Home>}></Route>
  <Route path='/movies' exact element={<AllMovies></AllMovies>}></Route>
  <Route path='/movies/:movieId' exact element={<SingleMovie></SingleMovie>}></Route>
  <Route path='/tvseries' exact element={<Tv></Tv>}></Route>
 </Routes>
</Router>



    </div>
  )
}

export default App
