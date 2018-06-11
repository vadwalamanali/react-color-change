import React, { Component } from 'react';
import ColorPicker from './../colorpicker/ColorPicker';
import './Header.css';

class Header extends Component{
      constructor(props){
          super(props);
          this.handleColorChange = this.handleColorChange.bind(this);
          this.state={
            bgColor: "teal"
          };
      };
      handleColorChange(color){
        this.setState({ bgColor: color });
      };
      updateBackgroundColor(){
        var body = document.querySelector('body')
        body.style.background = this.state.bgColor
      }
      componentDidMount(){
        this.updateBackgroundColor();
      }
      componentDidUpdate(){
        this.updateBackgroundColor();
      }
      render(){
        return(
            <div className="Header">
              <h1>Color Change</h1>
              <label>What Color?<ColorPicker value={this.state.bgColor} onColorChange={this.handleColorChange}/></label>
            </div>
        )
      }
};
export default Header;
