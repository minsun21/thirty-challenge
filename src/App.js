import './App.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Progress from './components/01Progress';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/progress">01 Progress</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/progress" component={Progress} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
