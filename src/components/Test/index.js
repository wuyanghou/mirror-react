import React from 'react';
import {connect} from 'mirrorx';
import {observer} from "mobx-react";
import styles from './styles.less';
import appState from '../../mobx';
import Children from '../TestChildren/index';
// import getWrappedInstance from 'UTIL/getWrappedInstance'
@connect()
class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //getWrappedInstance  connect原生提供的获取被包装的组件实例
    // this.$child.getWrappedInstance().sayHello();
  }

  render() {
    return (
      <div>
        <Children ref={e => this.$child = e}/>
      </div>
      )
  }
}


export default Test
