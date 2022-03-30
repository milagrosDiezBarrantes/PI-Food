import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
//import NotFoundPage from './Components/NotFound/NotFoundPage';
import Home from './Components/Home/Home.jsx';
//import Details from './Components/Details/Details.jsx';
//import CreateRecipe from './Components/CreateRecipe/CreateRecipe.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
