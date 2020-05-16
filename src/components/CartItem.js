import React, { Component } from 'react';

export default class CartItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { product } = this.props;
		return (
			<div className="box" style={{flex: "wrap", marginRight: "10px"}}>
				<div className="tile is-ancestor" style={{padding: "10px"}}>
					<div className="tile is-parent is-vertical">
						<img src={product.image} style={{width: "50%"}}/>
						<div style={{fontSize: "20px"}}>{product.name}</div>
						<p>${product.price}</p>
						<p>Quantity: {product.quantity}</p>
						<div className="button is-link" onClick={() => this.props.remove(product)}>Remove</div>
					</div>
				</div>
			</div>
		)
	}
}
