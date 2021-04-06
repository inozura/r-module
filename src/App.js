import { createBrowserHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";

import Routes from "./routes";
import MainContent from "./parts/MainContent";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <MainContent>
          <Routes />
        </MainContent>
      </Router>
    </div>
  );
}

export default App;
