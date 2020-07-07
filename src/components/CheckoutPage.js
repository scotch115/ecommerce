import React, { Component } from 'react';
import logo from '../boba_logo.jpg';
import { Link } from 'react-router-dom';

class CheckoutPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			total : 0
        }
    }

    componentDidMount() {
		const { payload } = this.props.location.state;
		this.setState({
			total: payload
		})
	}
 
    render() {
        return(
            <div style={{backgroundColor: "lavender"}}>
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
                <div className="container box" style={{height: "100vh"}}>
                <div className="section-body">
                <form className="container box">
                    <div className="title">
                        Checkout 
                    </div>
                    <div style={{textAlign: "right", paddingRight: "100px"}}>
                        Total: $ {this.state.total}
                    </div>
                    <div className="field is-horizontal">
                    <div className="field-label is-normal">
                    <label className="label">Name</label>
                    </div>
                    <div className="field-body">
                    <div className="field" style={{width: "50%"}}>
                        <p className="control is-expanded has-icons-left">
                        <input className="input" name="name" type="text" placeholder="First"></input>
                        <span className="icon is-small is-left">
                            <i className="fa fa-user"></i>
                        </span>
                        </p>
                    </div>
                    <div className="field" style={{width: "50%"}}>
                        <p className="control is-expanded has-icons-left">
                        <input className="input" name="name" type="text" placeholder="Last"></input>
                        <span className="icon is-small is-left">
                            <i className="fa fa-user"></i>
                        </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control is-expanded has-icons-left has-icons-right">
                        <input className="input" type="address" name="address" placeholder="Address" ></input>
                        <span className="icon is-small is-left">
                            <i className="fa fa-house"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fa fa-check"></i>
                        </span>
                        </p>
                    </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                    <label className="label">Payment</label>
                    </div>
                    <div className="field-body">
                    <div className="field">
                        <div className="control">
                        <input className="input " type="phone" name="card" placeholder="0000 0000 0000 0000"></input>
                        </div>
                    </div>
                    <div className="field-body">
                    <div className="field" style={{width: "50%"}}>
                        <div className="control">
                        <input className="input " type="phone" name="exp" placeholder="Exp."></input>
                        </div>
                    </div>
                    </div>
                    <div className="field-body">
                    <div className="field" style={{width: "50%"}}>
                        <div className="control">
                        <input className="input " type="phone" name="CVV" placeholder="CVV"></input>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="field is-horizontal">
                    <div className="field-label">
                    </div>
                    <div className="field-body">
                    <div className="field">
                        <div className="control">
                        <div type="submit" className="button is-link">
                            <Link style={{color: "white"}} to="/landing">Place Order</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </form>
        </div>
                </div>
            </div>
            )
        }
    }

    export default CheckoutPage;