import React from 'react';
import {connect} from 'mirrorx';
import {observer, inject} from "mobx-react";
import {Button} from 'antd';
import Pure from '../PureComponent/index';
import ContextComponent from '../Context/index';

import PropsComponent from '../DefaultPropsComponent/index';

import Decorator from '../Decorator/index';

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
    this.state={
      data:false,
      list:[1,2,3,4,5],
      obj:{age:26,name:'luoming'}
    }
  }

  sayHello = () => {

  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps);
    // console.log(nextState);
    return true;
  }

  componentDidMount() {

  }
  changeList=()=>{
    let {list}=this.state;
    //list
    list.push(9);
    this.setState({list:[].concat(list)});
    //pure 组件不会触发重新渲染
    // this.setState({list})
  }
  changeObject=()=>{
    let {obj}=this.state;
    obj.name='xiaochang';
    this.setState({obj:Object.assign({},obj)});
  }
  render() {
    let {data,list,obj}=this.state;
    return (
      <div>
        <h1>{this.props.stores.name}</h1>
        <h1>{this.props.stores.age}</h1>
        <h1>{this.props.stores.total}</h1>
        <Button onClick={this.props.stores.increment}>点击</Button>
        <br/>
        <Button onClick={e=>this.setState({data:!data})}>点击pure</Button>
        <br/>
        <Button onClick={this.changeList}>点击pure改变数组</Button>
        <br/>
        <Button onClick={this.changeObject}>点击pure改变对象</Button>
        <Pure data={data} list={list} obj={obj}/>
        <ContextComponent/>
        <br/>
        <div style={{marginTop:20}}></div>
        <PropsComponent/>
        <div style={{marginTop:30}}></div>
        <Decorator/>
      </div>
    )
  }
}
