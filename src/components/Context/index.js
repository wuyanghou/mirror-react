import React from 'react';
import PropTypes from 'prop-types';
import Child from './contextChild/index';
export default class ConTextComponent extends React.Component{
  constructor(props){
    super(props);
  }
   getChildContext= ()=>{
    return {color: "purple"};
  }
  render(){
    return <Child/>
  }
}
ConTextComponent.childContextTypes = {
  color: PropTypes.string
};
