import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import CreateDesignation from './features/designation/CreateDesignation';
import Home from './features/designation/List';
import EditDesignation from './features/designation/EditDesignation';

const App: React.FC = () => {
  return (
    <div>
        <nav>
          <ul>
            <li>
              <Link to={''}> Home </Link>
            </li>
            <li>
              <Link to={'/create'}> Create Designation </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path={'/create'} exact component={CreateDesignation} />
          <Route path={'/'} exact component={Home} />
          <Route path={'/edit/:id'} exact component={EditDesignation} />
        </Switch>
      </div>
  );
}

export default App;
