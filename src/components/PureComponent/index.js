import React from 'react';
import {Button} from 'antd';
//易变数据不能使用一个引用
//不变数据使用一个引用
export default class Pure extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      array:[8,9]
    }
  }

  click = () => {
    let {array}=this.state;
    //内部改变数组 PureComponent不起作用
    array.push(10);
    this.setState({color:'blue',array});
  }

  render() {
    console.log('pureComponent');
    let {list, data, obj} = this.props;
    let {color,array} = this.state;
    return (
      <div>
        <div>
          'pureComponent'
        </div>
        <div>{data + 1}</div>
        {
          list.map((v, k) => {
            return <div key={k}>{v}</div>
          })
        }
        <div>
          {obj.name} ---{obj.age}
        </div>
        <Button onClick={this.click}>Pure内部点击</Button>
        <div>{color}</div>
        <div>
          {array.map((v,k)=>{
            return <div key={k}>{v}</div>
          })}
        </div>
      </div>
    )
  }
}
