import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './DogList.css';

class DogList extends Component {
    render() {
        return (
            <div className="DogList">
                <h1 className="display-1 text-center">dogs list!</h1>
                <div className="row">
                    {this.props.dogs.map(d => (
                        <Link to={`/dogs/${d.name}`} className="DogList-dog col-md-6 col-lg-4 text-center text-dark" key={d.name}>
                            <img src={d.src} alt={d.name} />
                            <h2>{d.name}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
}

export default DogList;