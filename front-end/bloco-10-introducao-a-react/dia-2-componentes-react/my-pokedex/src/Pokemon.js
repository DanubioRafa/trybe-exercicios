import React from 'react';
import './pokemon.css';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const {name, type, averageWeight, image} = this.props.dataPoke;
        return (<div className='card'>
            <div className='info'>
            <h2>{name}</h2>
            <h2>{type}</h2>
            <h2>{averageWeight.value}{averageWeight.measurementUnit}</h2>
            </div>
            <img src={image} alt='Pokemon' width='200px'/>
        </div>)
    }
}

Pokemon.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.string,
    image: PropTypes.string
}

export default Pokemon;