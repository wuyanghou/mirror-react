import React from 'react';
import PropTypes from 'prop-types';
import co from 'co';

export default class PropsComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    wifi: PropTypes.number.isRequired
  }
  static defaultProps = {
    name: 'luoming',
    wifi: 88888
  }

  componentDidMount() {
    this.g=this.g.bind(this);
    co(this.g)
  }
  * g(){
    yield Promise.resolve(2).then((res)=>{console.log(res)});
    yield new Promise((res,rej)=>{
      setTimeout(()=>{
        console.log(1);
        res();
      },3000)
    });
    yield Promise.resolve(3).then((res)=>{console.log(res)});
  }
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.wifi}</div>
      </div>
    )
  }
}

// PropsComponent.propTypes={
//   name:PropTypes.string.isRequired,
//   wifi:PropTypes.number.isRequired
// }
// PropsComponent.defaultProps={
//   name:'luoming',
//   wifi:88888
// }
