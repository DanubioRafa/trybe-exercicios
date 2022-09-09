import React from 'react';
import Fieldset1 from './Fieldset1';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      inpName: '',
      inpSelectStates: '',
      inpHouse: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const {name, value} = target;
    const nameVerified = name === 'inpName' ? value.toUpperCase() : value;
    this.setState({
      [name]: nameVerified,
    })
  }
  render() {
    return <div>
      <Fieldset1  handleChange={this.handleChange}/>
    </div>
  }
}

export default Form;