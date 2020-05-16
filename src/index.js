import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Checkout from './components/Checkout.js';
import Landing from './components/Landing.js';
import About from './components/About.js';

const routing = (
	<Router>
		<div>
			<Route exact path="/" component={App} />
			<Route path="/about" component={About} />
			<Route path="/checkout" component={Checkout} />
			<Route path="/landing" component={Landing} />
		</div>
	</Router>
)

ReactDOM.render(routing,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
