import React from "react";
import Home from "./components/home/home";
import Ability from "./components/ability/ability";
import { Container } from 'react-materialize';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <main>
    <Container>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/ability' component={Ability}/>
      </Switch>
    </Container>
  </main>  
);

export default Main;