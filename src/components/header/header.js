import React from "react";
import { Navbar, Row} from 'react-materialize';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <Row>  
    <Navbar className="grey darken-2">
      <li><NavLink to="/">Lista de Pokemons</NavLink></li>
      <li><NavLink to="ability">Habilidades</NavLink></li>
    </Navbar>
  </Row>
);

export default Header;