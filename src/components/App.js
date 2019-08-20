import React from "react";
// import the broswer router from react rout dom
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/new/1" />} />
        <Route path="/create" component={CreateLink} />
        <Route path="/login" component={Login} />
        <Route path="/forgot" component={ForgotPassword} />
        <Route path="/search" component={SearchLinks} />
        <Route path="/top" component={LinkList} />
        <Route path="/new/:page" component={LinkList} />
        <Route path="/create" component={CreateLink} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
