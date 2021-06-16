import './App.css';
import Home from './Components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard from './Components/Pages/Dashboard';
import InfoItems from './Components/InfoItems';
import Repos from './Components/Repos';
import {useHistory} from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path = "/" exact = {true} >
          <Home/>
          </Route>

         <Route path = "/dashboard">
           <Dashboard/>
          </Route>
        </Switch>

      </Router>




    </div>
  );
}

export default App;
