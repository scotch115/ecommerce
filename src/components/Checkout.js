import React, { Component } from 'react';
import logo from '../boba_logo.jpg';
import CheckoutItem from './CheckoutItem.js';
import { Router, Route, Link } from 'react-router-dom';

class Checkout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			total : 0
		}

	}

	removeFromCheckoutCart = (product) => {
		let id = product.id;
		let cart = this.state.items;
		console.log(cart);
		product.qty -= 1;
		console.log("removeFromCheckoutCart called");
		this.setState({
			items: cart
		})
	}

	componentDidMount() {
		const { payload } = this.props.location.state;
		const { final } = this.props.location.state;
		this.setState({
			items: payload,
			total: final
		})
	}

	render() {
		return(
			<div>
				<nav className="navbar box" role="navigation" aria-label="main navigation" style={{backgroundColor: "white"}}>
						<div>
							<a className="" href="/">
								<img src={logo} width="150" alt="logo"/>
							</a>
							<a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
								<span aria-hidden="true"></span>
								<span aria-hidden="true"></span>
								<span aria-hidden="true"></span>
							</a>
						</div>
					<div id="navbarMenu" className="navbar-menu">
					<div className="navbar-start">
						<a className="navbar-item" href="/">
							Home
						</a>

						<a className="navbar-item" href="/about">
							About Us
						</a>
					</div>

					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons">
								<a className="fa fonta fa-facebook"></a>
								<a className="fa fonta fa-twitter" href="https://twitter.com/jordan_xib"></a>
								<a className="fa fonta fa-instagram" href="https://www.instagram.com/jordan.xib/"></a>
							</div>
						</div>
					</div>
				</div>
				</nav>
				<div className="box" style={{margin: "10px"}}>
					<div className="title is-3">Checkout</div>
				</div>
				<div className="box tile" style={{margin: "10px", flexWrap: "wrap"}}>
					{this.state.items.map((product) => {
						return(
							<CheckoutItem
							product={product}
							key={product.id}
							/>
						)
					})}
					<div>
					<div>
						<div style={{fontSize: "25px", fontWeight: "600"}}>Total Amount:</div>
						<p style={{fontSize: "15px"}}>${this.state.total}</p>
					</div>
						<div className="button is-black" style={{margin: "10px"}}>
							<Link style={{color: "white"}} to="/landing"> Check Out with Pay </Link>
						</div>
						<div className="button is-link" style={{margin: "10px"}}>
							<Link style={{color: "white"}} to="/landing"> Check Out with PayPal </Link>
						</div>
						<div className="button " style={{margin: "10px", backgroundColor: "darkOrange", color: "white"}}>
							<Link style={{color: "white"}} to="/landing"> Check Out as Guest </Link>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Checkout;
