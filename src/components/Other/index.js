import React from 'react';
import Cus from './Custormer';

console.log(Cus);
export default class Other extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({})
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const BUTTON = (<div><Cus/></div>);
    return (
      <div>
        {BUTTON}
      </div>
    )
  }
}
