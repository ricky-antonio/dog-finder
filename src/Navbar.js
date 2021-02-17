import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        const dogLinks = this.props.dogs.map(dog => (
            <li className="nav-item" key={dog.name}>
                <NavLink exact to={`/dogs/${dog.name}`} className="nav-link navbar-dark" >{dog.name}</NavLink>
            </li>
        ))
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink to="/dogs" className="navbar-brand">Dog App</NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle Navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item" key="home">
                            <NavLink exact to={"/dogs"} className="nav-link navbar-dark" >Home</NavLink>
                        </li>
                        {dogLinks}
                    </ul>
                </div>


            </nav>
        )
    }
}

export default Navbar;