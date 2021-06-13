import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import logo from "./logo.svg";
import "./App.css";
import AnotherPage from "./AnotherPage";
import ExampleSubPage from "./ExampleSubPage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            de-test example
          </Typography>
          <Button component={Link} color="inherit" to="/">
            Home
          </Button>
          <Button component={Link} color="inherit" to="/pricing">
            Pricing
          </Button>
          <Button component={Link} color="inherit" to="/signIn">
            Sign in
          </Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/signIn">
          <AnotherPage />
        </Route>
        <Route path="/pricing">
          <ExampleSubPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

const Home = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  </div>
);
