import React from 'react';
import PropTypes from 'prop-types';
export default class Second extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>{this.context.color}</div>
    )
  }
}
Second.contextTypes={
  color:PropTypes.string
}
