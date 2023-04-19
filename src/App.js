import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Landing from './components/Landing';



function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
            <Route exact path="/">
              <Landing/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
