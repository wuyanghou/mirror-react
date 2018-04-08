import React from 'react';
import {connect, actions} from 'mirrorx';
import './style.less';
import Img from  '../../assets/88.jpg'
let mapStateToState = (state) => {
  console.log(state);
  return {}
}

@connect(mapStateToState)
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    }
  }

  componentDidMount() {
    console.log(this.props);
  }

  add = () => {
    let {num} = this.state;
    num += 1;
    //调用方法一 {data} 需要与model中定义的一致
    // let {dispatch} = this.props;
    // dispatch({
    //   type: 'users/save',
    //   data: {num}
    // })
    //调用方法二
    actions.users.save({num});
    this.setState({num})
  }

  render() {
    let {num} = this.state;
    return (
      <div className="home">
        <h2>Welcome to Mirror!</h2>
        <img src={Img}/>
        <div style={{marginTop: 60}} onClick={this.add}>test models {num}</div>
      </div>
    )
  }
}


