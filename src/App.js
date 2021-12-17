import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Destination from './Pages/Destination/Destination';
import Crew from './Pages/Crew/Crew';
import Technology from './Pages/Technology/Technology';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/crew" element={<Crew/>}/>
      <Route path="/destination" element={<Destination/>}/>
      <Route path="/technology" element={<Technology/>}/>
    </Routes>
   
    </>
  );
}

export default App;
