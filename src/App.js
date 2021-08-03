import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';
function App() {
  return (
    <div>
       <Router>
          <switch>
             <Route exact path="/">
                <Home></Home>
             </Route>
             <Route path="/team/:id">
                 <TeamDetails></TeamDetails>
             </Route>
          </switch>
       </Router>
    </div>
  );
}

export default App;
