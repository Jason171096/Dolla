import './App.css';
import Home from './pages/index'
import SigninPage from './pages/signin'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/signin" component={SigninPage} exact />
    </Router>

  );
}

export default App;
