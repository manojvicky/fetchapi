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
          .then(data => {this.props.actions.datadispatch(data); return data;})
        );
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
  let storyPromise = this.getJSON('story.json');
  return storyPromise.then(story=>{console.log("story", story[0]);
    return this.getJSON(story[0].chapterUrls[i]);
  })
}

handleclickok(){
  console.log("fxn", this.getChapter(1));
  this.getChapter(0).then(chapter=> {
    console.log("chapter0", chapter);
   
  }).then(chapter=> {
    console.log("chapter1", chapter);
   
  })
  
}


   render() {
     
     
      return (
        <div>
        <div>Hello world</div>
        <button onClick={this.handleclickok}>click me</button>
        
        </div>
      );
   }
}
export default App;