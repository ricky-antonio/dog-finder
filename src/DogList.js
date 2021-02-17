import React, {Component} from 'react';
import './DogList.css';

class DogList extends Component {
    render() {
        return (
            <div className="DogList">
                <h1 className="display-1 text-center">dogs list!</h1>
                <div className="container">
                    <div className="row">
                        {this.props.dogs.map(d => (
                            <div className="DogList-dog col-md-6 col-lg-4 text-center" key={d.name}>
                                <h2>{d.name}</h2>
                                <img src={d.src} alt={d.name}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default DogList;