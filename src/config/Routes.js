import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from "../components/Home";
import Profile from "../components/Profile";
import Login from '../components/Login'
import Register from '../components/Register'
import ResultsPage from "../containers/ResultsPage";

export default withRouter(({ setCurrentUser,getSearchQuery, searchQuery, resetSearch, history, user_login }) => {
  return(
    <Switch>
      <Route exact path="/"
        render={props => <Home {...props} getSearchQuery={getSearchQuery} />} />
      <Route exact path="/login"
        render={props => <Login {...props} setCurrentUser={setCurrentUser} />} />
      <Route exact path="/register" 
        render={props=><Register {...props} setCurrentUser={setCurrentUser} />} />
      <Route exact path="/results" 
        render={props => <ResultsPage {...props} history={history} searchQuery={searchQuery} resetSearch={resetSearch}/>} />
      <Route exact path="/profile" 
        render={props => <Profile {...props} user_login={user_login}/>} />
    </Switch>
  )
})