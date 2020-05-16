import React, { Component } from 'react';
import logo from '../boba_logo.jpg';

class Landing extends Component {

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
				<div className="container box">
					<div className="title is-3">
					Thanks!
					</div>
					<p>
						Thanks for testing out my web app! <br /> <br />
						The purpose of this application was to further sharpen my skills of React web applications and how to utilize React components and tools to develop a simple, barebones e-commerce site. <br /><br />
						In enterprise production, this would ideally integrate Firebase Storage to store cart information and data to users who are logged in, and save to browser local storage if user is not logged into an account. If this project interests you, please see my personal website <a href="https://jordangamache.io" style={{color: "black"}}>here</a>.
					</p>
				</div>
			</div>
		)
	}
}

export default Landing;
