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

  fetch('/login', {
    method: "POST",
    headers: {
      "content-type" : "application/json"
    },
    body : JSON.stringify(req)
  })
}

loginbtn.addEventListener("click", login);

