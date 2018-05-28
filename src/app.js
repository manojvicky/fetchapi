import React from 'react';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
        data: []
    };
    this.handleclick= this.handleclick.bind(this);
}
    

handleclick(){
  let url="some.json";
  return new Promise((resolve, reject)=>{
  fetch(url).then(response=>{
    if(response.status===200){
      resolve(response);
    }else{
      reject(Error(response.statusText))
    }
  })
  }).then(data=>data.json())
  .then(data=>{
    console.log(data);
    this.props.actions.datadispatch(data);
  })
  }

   render() {
     
      let data = this.props.data.map((item, index)=>{if(this.props.data.length>0){
        return(<div key={index}>{item.name}</div>)
      }});
     
      return (
        <div>
        <div>Hello world</div>
        <button onClick={this.handleclick}>click me</button>
        {data}
        </div>
      );
   }
}
export default App;