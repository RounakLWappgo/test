import './App.css';
import List from './List'
import Home from './Home';
import Data from './Data';
import Posts from './Posts'
import { Route, Switch, Link } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <header>
          TO-DO List
        </header>
        <nav>
          <ul>
          <li><Link to='/'>Home</Link></li>
            <li><Link to='/tasks'>Tasks</Link></li>
            <li><Link to='/data'>Data</Link></li>
          </ul>
          </nav> 
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/tasks' component={List} />
        <Route exact path="/data" component={Data} />
        <Route path="data/:id" component={Posts}/>
      </Switch>


    </div>
  );
}

export default App;
