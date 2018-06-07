import React from 'react';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
        data: []
    };
    this.handleclick= this.handleclick.bind(this);
    
}
    
status(response){
if(response.status>=200 && response.status < 300){
  return Promise.resolve(response);
}else{
  return Promise.reject(new Error(response.statusText));
}
}

JSON(response){
return response.json();
}
handleclick() {
  fetch('some.json')
  .then(this.status)
  .then(this.JSON)
  .then(data=>console.log("data", data))
  .catch(error=>console.log("error", error))
}

render() {
      return (
        <div>
        <div>Hello world</div>
        <button onClick={this.handleclick}>click me</button>
        
        </div>
      );
   }
}
export default App;