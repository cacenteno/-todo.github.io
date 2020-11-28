import React from "react"
import NavBar from "./components/NavBar"
import { Route } from "react-router-dom"
import SignUp from "./views/SignUp"
import Login from "./views/Login"
import Home from "./views/Home"
import Profile from "./views/Profile"
import Timer from "./components/Timer"
// import PrivateRoute from "./components/PrivateRoute"
class Main extends React.Component {
  render(){
  return (
    <div className="App container">
      <NavBar token={this.props.token} logOut={this.props.logOut}></NavBar>
      <Route path="/" exact render={() => (<Home />)} />
      <Route path="/login" render={({ history }) => (<Login setTodos={this.props.setTodos} saveToken={this.props.saveToken} history={history} />)} />
      <Route path="/signup" render={(({ history }) => (<SignUp history={history} />))} />
      <Route path="/profile" render={({ history }) => (
        <React.Fragment>
          <Profile {...this.props} history={history} />
          <div className="col-sm-5">
            <Timer />
          </div>
        </React.Fragment>)} />
    </div>
  )
}
}


export default Main;
