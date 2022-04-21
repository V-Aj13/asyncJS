const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  //arrow function
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000); //1000 ms is the delay
}
//won't work without the function callback
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

getPosts(); //loads the two posts after a 1 second delay.

createPost(getPosts, { title: "Post Three", body: "This is post three" });
