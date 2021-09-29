import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Test from './pages/Test.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/test">Test</Link>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test" component={Test} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
