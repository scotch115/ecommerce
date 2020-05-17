import React, { Component } from 'react';
import ProductItem from './ProductItem';

class Boba extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    // 	products: []
    // }
  }

  componentDidMount() {
    // getProducts().then((value) => this.setState({ value }));
	}

  render() {
		// const { products } = this.props.products;
		return (
			<div className="container">
				<div className="card-title title is-3">Boba</div>
				{this.props.product.map((product, index) => {
			    return (
			      <ProductItem
							product={product}
							key={index}
							onAdd={this.props.handler}
							cart={this.props.cart}
							onRemove={this.props.handleCart}
						/>
			    );
				})}
				<hr />
			</div>
		)
  }
}

export default Boba;
