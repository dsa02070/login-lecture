"use strict";

const id = document.querySelector("#id"), 
psword = document.querySelector("#psword"),
loginbtn = document.querySelector("#loginbtn");

console.log(id, psword, loginbtn);

const login = (e) => {
  const req = {
    id: id.value,
    psword: psword.value
  };
  console.log(req);

  // fetch()
}

loginbtn.addEventListener("click", login);

