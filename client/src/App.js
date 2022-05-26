import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './component/Navbar'
import AllRoutes from './AllRoutes';
import Navbar1 from './pages/Auth/navbar1';
function App() {
  return (
    <div className="App">
      <Router>

      <Navbar/>
      <Navbar1/>
      <AllRoutes/>

      </Router>
    </div>
  );
}

export default App;
