import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import TermsOfService from '../pages/TermsOfService'
  
export default function Routing(){
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/TermsOfService">Terms Of Service</Link>
            </li>
            
          </ul>
  
          <hr />
  
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/TermsOfService">
              <TermsOfService/>
            </Route>
          
          </Switch>
        </div>
      </Router>
    );
  }