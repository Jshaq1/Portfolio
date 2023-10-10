import './App.css';
import NavBar from './components/Nav/NavBar'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CaseStudies from './components/CaseStudies/CaseStudies';
import Home from './Home';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-X1PDY0H2TY"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/work/:project' element={<CaseStudies></CaseStudies>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
