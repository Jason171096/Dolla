import './App.css';
import Navbar from './components/NavBar'
import Sidebar from './components/SideBar'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    
    <Router>
      <Navbar />
      <Sidebar />
    </Router>

  );
}

export default App;
