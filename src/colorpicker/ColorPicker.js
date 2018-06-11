import React, { Component } from 'react';
import './ColorPicker.css';
class ColorPicker extends Component{
  constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this);
}
handleChange(e){
  e.preventDefault();
  debugger
  var color = e.target.value

  if (this.props.onColorChange)
      this.props.onColorChange(color);
  }
  render(){
    return(
      <select value={this.props.value} onChange={this.handleChange}>
      <option value="orangered">orangered</option>
      <option value="teal">teal</option>
      <option value="orange">orange</option>
      <option value="indigo">indigo</option>
      <option value="red">red</option>
    </select>
    )
  }
};
export default ColorPicker;
