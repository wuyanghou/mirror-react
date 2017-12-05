import React from 'react';
import styles from './styles.less'
import jquery from 'jquery';
console.log(styles,8989);

class Test extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <h1 className={styles.test}>黄河落天走东海，万里写入胸怀间2</h1>
    )
  }
}
export default Test
