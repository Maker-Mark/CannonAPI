console.log('Hello');
var current = 182;
var outside;


fetch(`http://192.168.1.7:8080/ccapi/ver100/contents/sd/100CANON/IMG_0183.JPG`)
  .then(function (response) {
    return response.blob();
  })
  .then(images => {
    outside = URL.createObjectURL(images);
    console.log('Hello');
    // console.log(images.type);
    document.getElementById('main').src = outside;
    current++;
  });

// function fetchWrapper(url, options, timeout) {
//   return new Promise((res, rej) => {
//     fetch(url, options)
//       .then(response => response.blob())
//       .then(images => {
//         outside = images;
//         console.log('Hello');
//         // console.log(images.type);
//         document.getElementById('main') = outside;
//         current++;
//       })
//     if (timeout) {
//       const e = new Error("Connection timed out")
//       setTimeout(rej, timeout, e)
//     }
//   });
// }

// fetchWrapper(`http://192.168.1.7:8080/ccapi/ver100/contents/sd/100CANON/IMG_0181.JPG`, {}, 10000);