import Nav from './components/shared/Nav';
import './App.scss';
import './bootstrap.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Words from './components/words/Words';
import Resource from './components/resources/Resource';
import Resources from './components/resources/Resources';
import Word from './components/words/Word'; 
import WordNew from './components/words/New'; 
import Home from './pages/Home';
import Account from './pages/Account';
import NewResource from './components/resources/New';
import EditResource from './components/resources/Edit';
import EditWord from './components/words/Edit';
import EditWords from './components/resources/words/Edit';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import NewUser from './components/users/New';
import FlashMessages from './components/shared/FlashMessages';
import Study from './components/study/Study';
import Index from './pages/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div className="container">
        <FlashMessages />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/words/new" component={WordNew} />
          <Route exact path="/words/:id" component={Word} />
          <Route exact path="/words/:id/edit" component={EditWord} />
          <Route exact path="/words" component={Words} />
          <Route exact path="/resources/new" component={NewResource} />
          <Route exact path="/resources/:id" component={Resource} />
          <Route exact path="/resources/:id/edit/words" component={EditWords} />
          <Route exact path="/resources/:id/edit" component={EditResource} />
          <Route exact path="/resources/" component={Resources} />
          <Route exact path="/account/" component={Account} />
          <Route exact path="/signin/" component={SignIn} />
          <Route exact path="/signup/" component={NewUser} />
          <Route exact path="/study/" component={Study} />
          <Route exact path="/signout/" component={SignOut} />
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
