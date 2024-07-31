import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Devices from "./pages/Devices";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Devices} />
      </Switch>
    </Router>
  );
}

export default App;
