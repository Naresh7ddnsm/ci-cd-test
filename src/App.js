import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

// Import screens
import Loan from "./screens/loan/loan"
import LoginPage from "./screens/login/login"
import LoansPage from "./screens/loans/loans"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Loan} />
          <Route exact path="/loans" component={LoansPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
