import React from 'react';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
        data: []
    };
    this.handleclick= this.handleclick.bind(this);
    this.handleclickok= this.handleclickok.bind(this);
    this.getJSON= this.getJSON.bind(this);
    // this.getChapter= this.getChapter.bind(this);
}
    
getJSON(url) {
  return this.handleclick(url)
      .then(response => response.json()
          .then(data => {this.props.actions.datadispatch(data); data;}));
}
handleclick(url) {
  return new Promise((resolve, reject) => {
      fetch(url).then(response => {
          if (response.status === 200) {
              resolve(response);
          } else {
              reject(Error(response.statusText))
          }
      })
  })
}

getChapter(i){
  storyPromise = this.getJSON('story.json');

  return storyPromise.then(function(story) {
    return this.getJSON(story.chapterUrls[i]);
  })
}

handleclickok(){
  // this.getChapter(0).then(function(chapter) {
  //   console.log(chapter);
  //   return getChapter(1);
  // }).then(function(chapter) {
  //   console.log(chapter);
  // })
  this.getJSON("some.json");
}


   render() {
     
      let data = this.props.data.map((item, index)=>{if(this.props.data.length>0){
        return(<div key={index}>{item.name}</div>)
      }});
     
      return (
        <div>
        <div>Hello world</div>
        <button onClick={this.handleclickok}>click me</button>
        {data}
        </div>
      );
   }
}
export default App;