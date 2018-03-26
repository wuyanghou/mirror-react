import React from 'react';
import PropTypes from 'prop-types';
import Child from './contextChild/index';
import Second from './contextChild/second';

export default class ConTextComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      color:'red',
    }
  }

  getChildContext = () => {
    return {
      color: this.state.color,
      change:()=> {
        this.setState({color:'blue'});
      }
    };
  }

  render() {
    return (
      <div style={{marginTop:50}}>
        <hr/>
        <div>context</div>
        <Child/>
        <Second/>
      </div>
    )
  }
}
ConTextComponent.childContextTypes = {
  color: PropTypes.string,
  change: PropTypes.func
};
