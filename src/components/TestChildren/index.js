import React from 'react';
import {connect} from 'mirrorx';
import styles from './index.less'

console.log('testChunkhash');
let mapStateToProps = (state) => {
  return {};
}

let mapDispatchToProps = (dispatch) => {
  return {};
}

let mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

@connect(mapStateToProps, mapDispatchToProps, mergeProps, {withRef: true})
export default class Child extends React.Component {
  constructor(props) {
    super(props);
  }

  sayHello = () => {

  }

  render() {
    return (
      <div>
        <h1 className={styles.red}>黄河落天走东海，万里写入胸怀间</h1>
        <div className="color-blue">蓝色1</div>
        <div className="color-yellow">黄色2</div>
        <div className="color-black">黑色3</div>
        <div className="test">mixin</div>
        <img src="../../../static/88.jpg" alt=""/>
        <img src="../../../static/99.jpg" alt=""/>
        <img src="./static/logo.png" alt=""/>
      </div>
    )
  }
}
