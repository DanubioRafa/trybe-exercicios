import React from 'react';
import brazilStates from '../data/data';

class Fieldset1 extends React.Component {

  render() {
    const { inpName, inpSelectStates } = this.state;
    const { handleChange } = this;
    return (
      <fieldset>
        <input
         name="inpName"
          value={ inpName }
           type={'text'}
            maxLength={40}
             required={true}
              onChange={ handleChange }></input>
        <select required={true} name="inpSelectStates" onChange={handleChange} value={inpSelectStates}>
          {brazilStates.map((estado) => <option value={estado} key={estado}>{estado}</option>)}
        </select>
        <div onChange={handleChange}>
          <label>
            House
            <input type="radio" value="House" name='inpHouse'/>
            </label>
          <label>
            Apartment
            <input type="radio" value="Apartment" name='inpHouse'/>
          </label>
        </div>
        
      </fieldset>
    )   
  
  }}

export default Fieldset1;