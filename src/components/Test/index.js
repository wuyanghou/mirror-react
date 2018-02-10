import React from 'react';
import {connect} from 'mirrorx';
import styles from './styles.less';
import Children from '../TestChildren/index';
// import getWrappedInstance from 'UTIL/getWrappedInstance'

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //getWrappedInstance  connect原生提供的获取被包装的组件实例
    this.$child.getWrappedInstance().sayHello()
  }

  render() {
    return (<Children ref={e => this.$child = e}/>)
  }
}


export default Test
