import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
//import NotFoundPage from './Components/NotFound/NotFoundPage';
import Home from './Components/Home/Home.jsx';
import RecipeDetails from './Components/RecipeDetails/RecipeDetails.jsx';
import CreateRecipe from './Components/CreateRecipe/CreateRecipe.jsx'


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path='/' element={<LandingPage />}/>
          <Route path='/home' element={<Home/>}/>
          {/*<Route path='/home' element={<NotFoundPage/>}></Route>*/ }
          <Route path='/recipes/:id' element={<RecipeDetails/>}/>
          <Route path='/CreateRecipe' element={<CreateRecipe/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
