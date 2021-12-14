import './App.css';
import {Routes, Route} from 'react-router-dom'
import DesignSystem from './DesignSystem/DesignSystem';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/design" element={<DesignSystem/>}/>
    </Routes>
   
    </>
  );
}

export default App;
