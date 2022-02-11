import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/About us/AboutUs';
import FoodDetails from './Components/FoodDetails/FoodDetails';
import FoodGallery from './Components/FoodGallery/FoodGallery';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Home />  } />
          <Route path='home' element={<Home />  } />
          <Route path='foodGallery' element={<FoodGallery />  } />
          <Route path='about-us' element={<AboutUs />  } />
          <Route path='foodDetails/:foodId' element={<FoodDetails /> } />
          <Route path='*' element={<NoMatch />} />
        </Routes>
    </div>
  );
}

export default App;
