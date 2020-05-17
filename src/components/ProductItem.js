import React, { Component } from 'react';

class ProductItem extends Component {

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

	removeFromCart = () => {
		var item = this.props.cart[this.props.product.id];
		console.log("Product: "+item.name+" has been removed");
		if (item.quantity > 0) {
			console.log("Quantity of product "+item.name+" has been changed from "+item.quantity+" to "+(item.quantity - 1));
			item.quantity = item.quantity-1;
		} else {
			console.log("Quantity of product "+item.name+" is "+item.quantity);
			item.quantity = 0;
		}
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
							<p>${product.price}</p>
							{(cart[id] < product.available_quantity) || (cart[id] == null) ?
								<p>
									{cart[id] == null || (cart[id] == 0) ? '' : <a className="fa minus fa-minus" style={{margin: "auto"}} onClick={this.removeFromCart} style={{backgroundColor: "black", color: "white"}}></a> }
									{(cart[id] == null) || (cart[id] == 0) ? ' ' : cart[id]}
									{ (cart[id] == null) || (cart[id] == 0) ? <a className="button is-success" style={{margin: "auto"}} onClick={this.addToCart} style={{color: "white"}}>Add to Cart</a> : <a className="fa plus fa-plus" onClick={this.addToCart} style={{backgroundColor: "black", color: "white"}}></a> }
								</p>
								:
								<p>This product is currently out of stock.</p>
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default ProductItem;
