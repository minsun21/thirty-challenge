import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './css/style.css';

import Main from './components/00Main';
import Progress from './components/01Progress';
import JokeGenerator from './components/02JokeGen';
import ImagePassword from './components/03ImagePassword';
import LineThrough from './components/04LineThrough';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/progress" component={Progress} />
          <Route exact path="/joke" component={JokeGenerator} />
          <Route exact path="/imagePassword" component={ImagePassword} />
          <Route exact path="/lineThrough" component={LineThrough} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
