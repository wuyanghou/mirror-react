import React from 'react';
import Worker from './test.webworker.js';

export default class Webworker extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const worker = new Worker();
    worker.postMessage({a: 1});
    worker.onmessage = function (event) {
      console.log(event.data)
    };
  }

  render() {
    return (
      <h1>webworker</h1>
    )
  }
}
