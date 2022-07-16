"use strict";

let blogs = [];
for(const post of data){
    blogs.push(new Blog(
      post.avatar,
      post.titulo,
      post.texto,
    )
    );
}


  let accumulator = ""
  for (const blog of blogs){
    accumulator += blog.render();
  
};

const section = document.querySelector("section");

section.innerHTML = accumulator;

/* Agregar eventos */
addBlogMouseEvents();

