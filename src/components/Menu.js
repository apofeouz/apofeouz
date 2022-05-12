import React, { Component } from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Project from '../pages/Project';
import Contact from '../pages/Contact';
import Music from '../pages/Music'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Data from "../data/data"



export default class Menu extends Component {
    render() {
        return (
			<Router>
		<div>	
			
		
     <nav className="mainmenu">
	<div className="container">
		<div className="dropdown">
			<button type="button" className="navbar-toggle" data-toggle="dropdown"><span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
	
			<ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">
				<Link to="/">Главная</Link>
				<li><Link as={Link}  to="/pages/About">О проекте</Link></li>
				<li><Link as={Link} to="/pages/Projects">Смотреть</Link></li>
				{/* <li><Link as={Link} to="/pages/Music">Слушать</Link></li> */}
				<li><Link as={Link}  to="/pages/Contact">Контакты</Link></li>
				
			</ul>
		</div>
	</div>
</nav> 
<Switch>
<Route exact path="/" render= { () =><Home/> } />
<Route exact path="/pages/About" render= { () =><About /> } />
<Route exact path="/pages/Projects" render= { () =><Projects Data = {Data}/> } />
<Route exact path="/pages/Project/:title" component={Project} />
<Route exact path="/pages/Music" render= { () =><Music/> } />
<Route exact path="/pages/Contact" render= { () =><Contact/> } />
</Switch>



</div>
</Router> 
 );
}
}
