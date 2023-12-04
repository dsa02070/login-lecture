"use strict";

const id = document.querySelector("#id"), 
psword = document.querySelector("#pw"),
loginbtn = document.querySelector("#loginbtn");

// console.log(id, psword, loginbtn);

const login = (e) => {
  const req = {
    id: id.value,
    pw: psword.value
  };
  console.log(req);

  fetch('/login', {
    method: "POST",
    headers: {
      "content-type" : "application/json"
    },
    body : JSON.stringify(req)
  })
  .then(res => res.json())
  .then(res => {
    if(res.success){
      location.href = "/";
    } else {
      alert(res.msg);
    }
  })
  .catch(err => {});
}

loginbtn.addEventListener("click", login);

