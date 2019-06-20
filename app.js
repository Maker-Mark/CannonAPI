console.log('Hello');
var current = 182;
var outside;

// test


function fetchWrapper(url, options, timeout) {
  return new Promise((res, rej) => {
    fetch(url, options)
      .then(response => response.blob())
      .then(images => {
        outside = images;
        console.log('Hello');
        // console.log(images.type);
        document.getElementById('main') = outside;
        current++;
      })
    if (timeout) {
      const e = new Error("Connection timed out")
      setTimeout(rej, timeout, e)
    }
  })
}

fetchWrapper(`https://api.github.com/users?`, {}, 10000);