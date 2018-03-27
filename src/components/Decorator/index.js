import React from 'react';
const test=(...arg)=>{return (target)=>{
  Object.assign(target.prototype,...arg);
}};

const obj={fn(){console.log('fn')}};
@test(obj)
export default class Decorator extends React.PureComponent{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log(this.name);
    this.fn();
  }

  render(){
    return (
      <div>{123}</div>
    )
  }
}
