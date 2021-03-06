import React, { Component } from 'react';
import logo from './boba_logo.jpg';
import './App.css';
import Boba from './components/Boba.js';
import Cart from './components/Cart.js';
import strawberry from './strawberry.jpg';
import mango from './mango.jpg';
import lychee from './lychee.jpg';
import matcha from './matcha.jpg';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			products: [
			  {
			    id: 0,
			    name: 'Strawberry Milk Tea',
			    available_quantity: 5,
			    price: 5.49,
			    description: 'Strawberry Milk Tea with classic and strawberry boba balls.',
					image: strawberry,
					quantity: 0
			  },
				{
			    id: 1,
			    name: 'Mango Milk Tea',
			    available_quantity: 3,
			    price: 3.49,
			    description: 'Mango Milk Tea infused with dragonfruit and orange flavors.',
					image: mango,
					quantity: 0
			  },
				{
			    id: 2,
			    name: 'Lychee Milk Tea',
			    available_quantity: 8,
			    price: 2.49,
			    description: 'Specialty Lychee Milk Tea with fresh chewy boba balls.',
					image: lychee,
					quantity: 0
			  },
				{
			    id: 3,
			    name: 'Matcha Milk Tea',
			    available_quantity: 4,
			    price: 7.49,
			    description: 'Specialty Matcha Milk Tea with hints of chai and nutmeg.',
					image: matcha,
					quantity: 0
			  }
			],
			total: 0,
			cart: []
		}
		this.handler = this.handler.bind(this);
		this.handleCart = this.handleCart.bind(this);
	}

	handler = (item) => {
		this.state.cart = item;
		this.setState({
			cart : this.state.cart
		});
	}

	clearCart = () => {
		localStorage.removeItem('cart');
		this.setState({cart: !this.state.cart});
		console.log('Clear cart was called in the App.js parent component');
	}

	handleCart = (item, total) => {
		this.state.cart = item;
		console.log("Total: "+total);
		console.log(this.state.cart);
		this.setState({
			cart: this.state.cart,
			total: (total != null ? total.toFixed(2) : 0.00)
		});
	}



	removeFromCart = (product) => {
		let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
		let id = product.id;
		cart[id] = (cart[id] ? cart[id]: 0);
		let qty = cart[id] - 1;
		if (qty < 0) { qty = 0 };
		if (product.available_quantity < qty) {
			cart[id] = product.available_quantity;
		} else {
			cart[id] = qty;
		}
		localStorage.setItem('cart', JSON.stringify(cart));
		// this.loadCart();;
		this.setState({
			cart: cart
		});
	}


  render () {
		return (
	    <div style={{backgroundColor: "rgb(160, 167, 188)"}}>
	      <nav className="navbar" role="navigation" aria-label="main navigation" style={{backgroundColor: "white", padding: "10px", marginBottom: "25px"}}>
						<div>
							<a className="" href="/">
								<img src={logo} width="150" alt="logo"/>
							</a>
							<a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
					      <span aria-hidden="true"></span>
					      <span aria-hidden="true"></span>
					      <span aria-hidden="true"></span>
					    </a>
						</div>
					<div id="navMenu" className="navbar-menu">
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
			          <a className="fa fonta fa-facebook" href="https://jordangamache.io"></a>
			          <a className="fa fonta fa-twitter" href="https://twitter.com/jordan_xib"></a>
								<a className="fa fonta fa-instagram" href="https://www.instagram.com/jordan.xib/"></a>
			        </div>
			      </div>
			    </div>
			  </div>
	      </nav>
				<div className="tile is-ancestor" style={{marginLeft: "15px", marginRight: "1px"}}>
					<div className="tile is-parent is-7">
						<div className="tile is-child box">
							<Boba product={this.state.products} remove={this.removeFromCart} cart={this.state.cart} remove={this.removeFromCart} total={this.state.total} handler={this.handler}/>
						</div>
					</div>
					<div className="tile is-parent">
						<div className="tile is-child box" style={{height: "200px"}}>
							<Cart product={this.state.cart} remove={this.removeFromCart} handler={this.handleCart} total={this.state.total} clear={this.clearCart}/>
						</div>
					</div>
				</div>
	    </div>
	  );
	}
}

export default App;
