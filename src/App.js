import './App.css';
import Home from './pages/index'
import SigninPage from './pages/signin'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

function App() {
  return (
    
    <Router>
      <Switch>
        <Router path="/" component={Home} exact />
        <Router path="/signin" component={SigninPage} exact />
      </Switch>
      <Home />
    </Router>

  );
}

export default App;
