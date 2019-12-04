import React from 'react';
import {
  Route,
  Switch,
} from "react-router-dom"
// import './App.css';
import Movie_ed from "./views/movie_ed/index"
import Cinema_ed from "./views/cinema_ed/index"
import Movie_th from "./views/movie_th/index"
import Home from "./views/Home"
class App extends React.Component{
  render (){
    return (
      <div>
          <Switch>
            <Route path={"/movie_ed/:id"} component={Movie_ed}></Route>
            <Route path={"/cinema_ed"} component={Cinema_ed}></Route>
            <Route path={"/movie_th/:id"} component={Movie_th}></Route>
            <Route path={"/"} component={Home} exact={true}></Route>
          </Switch>
      </div>
    )
  }
}

export default App;