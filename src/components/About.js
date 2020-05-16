import React, { Component } from 'react';
import logo from '../boba_logo.jpg';

class About extends Component {

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
				<div className="box">
					<div className="title is-3">
						About Us
					</div>
					<div>
					<p>
						Hello!<br /><br />
						We are a small boba tea company running out of Orlando, Florida! We offer a smaller selection of milk teas here online, so come into our store for a larger selection!
					</p>
					<br /><br /><br /><br /><br />
					<p>
						On a more serious note: <br /><br />
						This website is a mockup of a potential small business e-commerce website built using the ReactJS web framework. React allows for maximum customization, while optimizing for mobile viewing, making it easy to adapt to client needs. This mockup simply stands to showcase how a developer can stretch the capabilities of Javascript in a variety of different cases.
					</p>
					</div>
				</div>
			</div>
		)
	}
}
export default About;
