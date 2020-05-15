import React, { Component } from 'react';

class ProductItem extends Component {
	constructor(props) {
		super(props);

		// this.state = {quantity: 1}
	}

	handleInputChange = event =>
		this.setState({[event.target.name] : event.target.value})

	addToCart = () => {
		let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
		let id = this.props.product.id.toString();
		cart[id] = (cart[id] ? cart[id]: 0);
		let qty = cart[id] + 1;
		if (qty < 0) { qty = 0 };
		if (this.props.product.available_quantity < qty) {
			cart[id] = this.props.product.available_quantity;
		} else {
			cart[id] = qty;
		}
		localStorage.setItem('cart', JSON.stringify(cart));
		var item = [];
		item.push({
			id: this.props.product.id,
			name: this.props.product.name,
			available_quantity: this.props.product.available_quantity,
			price: this.props.product.price,
			quantity: qty,
			image: this.props.product.image
		});
		this.props.onAdd(cart);
		item = [];
	}

	render() {
		const { product } = this.props;
		let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
		let id = product.id.toString();
		return (
			<div>
				<div className="tile is-ancestor">
					<div className="tile is-parent is-vertical">
						<div className="tile is-child box">
							<img src={product.image} />
							<p style={{fontWeight: "500", fontSize: "20px"}}>{product.name}</p>
							<p style={{fontWeight: "300", fontSize: "15px"}}>{product.description}</p>
							{(cart[id] < product.available_quantity) || (cart[id] == null) ?
								<p><a className="fa plus fa-plus" style={{margin: "auto"}} onClick={this.addToCart} style={{backgroundColor: "black", color: "white"}}></a>${product.price}</p>
								:
								<p className="is-danger">This product is currently out of stock.</p>
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default ProductItem;
