import React from 'react';

export default class Other extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(8989);
  }

  render() {
    console.log(7878);
    return (
      <div>
        button
      </div>
    )
  }
}
