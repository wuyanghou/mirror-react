import React from 'react';
import PropTypes from 'prop-types';
export default class ConTextChild extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.context);
    return (
      <div>{this.context.color}</div>
    )
  }
}
ConTextChild.contextTypes = {
  color: PropTypes.string
};
