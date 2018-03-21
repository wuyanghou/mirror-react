import {observable,autorun} from 'mobx';
let appState=observable({
  name:'luoming',
  age:26,
  fn(){
    console.log(9999);
  }
})

autorun(function() {
  console.log(
    appState
  );
});
export default appState;
