import React, { Component } from 'react';
import CartItem from './CartItem';
import strawberry from '../strawberry.jpg';
import mango from '../mango.jpg';
import lychee from '../lychee.jpg';

export default class Cart extends Component {
	constructor(props) {
		super(props);

		this.state = { cart: [] }

		this.loadCart = this.loadCart.bind(this);
	}

	componentDidMount() {
		for (var i = 0; i < this.props.length; i++) {
			console.log(this.props.product[i].name);
		}
		this.loadCart();
	}

	componentDidUpdate() {
		if (this.state.cart == this.props.product) {
			console.log("Cart is up to date.");
			return;
		} else {
			this.loadCart();
		}
	}


	loadCart() {
		let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
		if (!cart) return;
		const products = [
			{
				id: 0,
				name: 'Strawberry Milk Tea',
				available_quantity: 5,
				price: 5.49,
				description: 'Strawberry Milk Tea with fresh chewy boba balls.',
				image: strawberry,
				quantity: 0
			},
			{
				id: 1,
				name: 'Mango Milk Tea',
				available_quantity: 3,
				price: 5.49,
				description: 'Mango Milk Tea with fresh chewy boba balls.',
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
			}
		];
		let total = 0;
		var tmp = [];
		var qty = 0;
		if (cart[0] >= 1) {
			qty = 0;
			for (var i = 0; i < cart[0]; i++) {
				qty++;
			}
			tmp.push({
				id: 0,
				name: 'Strawberry Milk Tea',
				available_quantity: 5,
				price: 5.49,
				description: 'Strawberry Milk Tea with fresh chewy boba balls.',
				image: strawberry,
				quantity: qty
			});
			total += 5.49 * qty;
		}
		if (cart[1] >= 1) {
			qty = 0;
			for (var i = 0; i < cart[1]; i++) {
				qty++;
			}
			tmp.push({
				id: 1,
				name: 'Mango Milk Tea',
				available_quantity: 3,
				price: 3.49,
				description: 'Mango Milk Tea with fresh chewy boba balls.',
				image: mango,
				quantity: qty
			});
			total += 3.49 * qty;
		}
		if (cart[2] >= 1) {
			qty = 0;
			for (var i = 0; i < cart[2]; i++) {
				qty++;
			}
			tmp.push({
				id: 2,
				name: 'Lychee Milk Tea',
				available_quantity: 8,
				price: 2.49,
				description: 'Specialty Lychee Milk Tea with fresh chewy boba balls.',
				image: lychee,
				quantity: qty
			});
			total += 2.49 * qty;
		}
		this.setState({
			cart: tmp
		});
		this.props.handler(tmp, total);
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
		this.loadCart();
	}

	clearCart = () => {
		this.props.clear();
		console.log('Clear cart was called in the Cart.js component');
	}




	render() {
		return (
			<div className="container">
				<div className="card-title title is-3">
					Cart
				</div>
				<div className="tile" style={{flexWrap: "wrap"}}>
				{this.props.product == 'undefined'
					? this.state.product.map((product) => {
					return(
						<CartItem
							product={product}
							remove={this.removeFromCart}
							key={product.id}
							/>
					)
				})
				: this.state.cart.map((product) => {
					return(
						<CartItem
							product={product}
							remove={this.removeFromCart}
							key={product.id}
						/>
					)
				})
			}
				</div>
				<br />
				<hr />
				{this.props.product.length ?
					<div>
						<div className="title is-3">Total Amount:</div>
						<p>${this.props.total}</p>
					</div>
					:
					''
				}
				<div className="button is-danger" onClick={this.clearCart}>Clear Cart</div>
			</div>
		)
	};
}