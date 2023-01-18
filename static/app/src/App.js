import React, { useEffect, useState } from "react";
import { Router, Switch, Route } from "react-router";
import { Link, useHistory, useParams } from "react-router-dom";
import Button from "@atlaskit/button/standard-button";
import { view } from "@forge/bridge";

function TaskAnalysisReport() {
  return (
    <>
      <h2>Task Analysis Report</h2>
    </>
  );
}

function ReworkAnalysisReport () {
  return (
    <>
      <h2>Rework Analysis Report</h2>
    </>
  );
}

function LifeCycleAnalysisReport () {
  return (
    <>
      <h2>LifeCycle Analysis Report</h2>
    </>
  );
}

function CostAnalysisReport () {
  return (
    <>
      <h2>Cost Analysis Report</h2>
    </>
  );
}



function App() {
  const [history, setHistory] = useState(null);

  useEffect(() => {
    view.createHistory().then((newHistory) => setHistory(newHistory));
  }, []);

  return (
    <div>
      {history ? (
        <Router history={history}>
          <Switch>
            <Route path="/task-analysis-report">
              <TaskAnalysisReport />
            </Route>
            <Route path="/rework-analysis-report">
              <ReworkAnalysisReport />
            </Route>
            <Route path="/lifecycle-analysis-report">
              <LifeCycleAnalysisReport />
            </Route>
            <Route path="/cost-analysis-report">
              <CostAnalysisReport />
            </Route>
          </Switch>
        </Router>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default App;
