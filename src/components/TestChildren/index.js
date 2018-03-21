import React from 'react';
import {observer, inject} from "mobx-react";

// import appState from '../../mobx';
import {connect} from 'mirrorx';

import Son from '../Son';

let mapStateToProps = (state) => {
  return {num: state.users.num};
}

let mapDispatchToProps = (dispatch) => {
  return {
    save(num) {
      dispatch({type: 'users/save', data: num})
    }
  };
}

let mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

// @connect(mapStateToProps, mapDispatchToProps, mergeProps, {withRef: true})
@inject('stores')
@observer
export default class Child extends React.Component {
  constructor(props) {
    super(props);
  }

  sayHello = () => {

  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps);
    // console.log(nextState);
    return true;
  }

  componentDidMount() {
    setTimeout(() => {
      console.log(this.props.stores.fn());
      console.log(this.props.stores.age);
      console.log(this.props.stores.age);
      console.log(this.props.stores.name);
    }, 3000)
  }

  render() {
    return (
      <div>
        <h1>{this.props.stores.name}</h1>
        <h1>123</h1>
        <h1>123</h1>
        <h1>123</h1>
        <Son/>
      </div>
    )
  }
}
