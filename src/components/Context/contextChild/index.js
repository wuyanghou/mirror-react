import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';
export default class ConTextChild extends React.Component{
  constructor(props){
    super(props);
  }
  changeContext=()=> {
    console.log('change');
    this.context.change();
  }
  render(){
    return (
      <div>
        <div>{this.context.color}</div>
        <Button onClick={this.changeContext}>点击改变Context</Button>
      </div>
    )
  }
}
ConTextChild.contextTypes = {
  color: PropTypes.string,
  change:PropTypes.func
};
