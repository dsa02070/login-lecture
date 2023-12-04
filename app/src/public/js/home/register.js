"use strict";

const id = document.querySelector("#id"), 
name=document.querySelector("#name"),
psword = document.querySelector("#pw"),
confirmPw = document.querySelector("#confirm-pw"),
registerbtn = document.querySelector("#registerbtn");

const register = (e) => {
  e.preventDefault();
  const req = {
    id: id.value,
    name: name.value,
    pw: psword.value,
    confirmPw: confirmPw.value
  };
  console.log(req);

  fetch('/register', {
    method: "POST",
    headers: {
      "content-type" : "application/json"
    },
    body : JSON.stringify(req)
  })
  .then(res => res.json())
  .then(res => {
    if(res.success){
      location.href = "/login";
    } else {
      alert(res.msg);
    }
  })
  .catch(err => {
    console.log("회원가입 중 에러 발생");
  });
}

registerbtn.addEventListener("click", register);

