import React from 'react';
import {connect} from 'mirrorx';
import styles from './index.less'

let mapStateToProps = (state) => {
  return {num: state.users.num};
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
    let {num}=this.props;
    return (
      <div>
        <h1 className={styles.red}>黄河落天走东海，万里写入胸怀间1</h1>
        <div className="color-blue">蓝色ss1</div>
        <div>测试速度123456789345678</div>
        <div className="color-yellow">黄色2</div>
        <div className="color-black">黑色3</div>
        <div className="test">mixin</div>
        <h2>{num}</h2>
        <img src="../../../static/88.jpg" alt=""/>
        <img src="../../../static/99.jpg" alt=""/>
        <img src="./static/logo.png" alt=""/>
      </div>
    )
  }
}
