import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';
function App() {
  return (
    <div>
       <Router>
          <Switch>
             <Route exact path="/">
                <Home></Home>
             </Route>
             <Route path="/team/:id">
                 <TeamDetails></TeamDetails>
             </Route>
          </Switch>
       </Router>
    </div>
  );
}

export default App;
