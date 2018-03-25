import React from 'react';
//易变数据不能使用一个引用
//不变数据使用一个引用
export default class Pure extends React.PureComponent{
  constructor(props){
    super(props);
  }
  render(){
    console.log('pureComponent');
    let {list,data,obj}=this.props;
    return (
      <div>
       <div>
         'pureComponent'
       </div>
        <div>{data + 1}</div>
        {
          list.map((v,k)=>{
            return <div key={k}>{v}</div>
          })
        }
        <div>
          {obj.name} ---{obj.age}
        </div>
      </div>
    )
  }
}
