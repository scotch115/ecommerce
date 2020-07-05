import React, { Component } from 'react';
import ProductItem from './ProductItem';

class Boba extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // getProducts().then((value) => this.setState({ value }));
	}

  render() {
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
							onRemove={this.props.remove}
							total={this.props.total}
						/>
			    );
				})}
			</div>
		)
  }
}

export default Boba;
