// handleclick("some.json")
//     .then(response => {
//         response.json()
//         .then(data => { console.log("data", data); return data })
//     },
//         error => {
//             console.log("failed", error);
//         }
//     )


function getJSON(url) {
    return handleclick(url)
        .then(response => response.json()
            .then(data => data));
}

function handleclick(url) {
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

var storyPromise;

function getChapter(i) {
  storyPromise = storyPromise || getJSON('story.json');

  return storyPromise.then(function(story) {
    return getJSON(story.chapterUrls[i]);
  })
}


getChapter(0).then(function(chapter) {
  console.log(chapter);
  return getChapter(1);
}).then(function(chapter) {
  console.log(chapter);
})