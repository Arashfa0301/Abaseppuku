//import { useState } from "preact/hooks";
import { Route, Router } from "preact-router";

import Home from "./routes/home";
import SomeOtherPage from "./routes/someOtherPage";

export function App() {
  return (
    <div id="app">
      <main>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/someOtherPage" component={SomeOtherPage} />
        </Router>
      </main>
    </div>
  );
}
