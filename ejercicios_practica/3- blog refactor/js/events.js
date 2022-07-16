"use strict";
function addBlogMouseEvents(){

const posts = document.getElementsByClassName("post");

for (const post of posts) {
  post.classList.add("closed");

  post.addEventListener("mouseover", () => {
     post.classList.remove("closed");
     post.classList.add("open");
  });

  post.addEventListener("mouseout", () => {
     post.classList.add("closed");
     post.classList.remove("open");
  });
}
}