"use strict";

const UserStorage = require("../../model/UserStorage");


const output = {
  hello : (req, res) => {
    res.render("home/index")
  },
  login : (req, res) => {
    res.render("home/login")
  },

  register : (req, res) => {
    res.render("home/register")
  }
}


const process = {
  login : (req, res) => {

    const user = new User(req.body)
    const response = user.login()
    return res.json(response)

  //   const id = req.body.id
  //   const pw = req.body.pw

  //   // const userStorage = new UserStorage(id, pw);
  //   const users = UserStorage.getUsers('id', 'pw');
  //   console.log(users)

  //   const response = {}

  //   if(users.id.includes(id)){
  //     const idx = users.id.indexOf(id);
  //     if( users.pw[idx] === pw ){
  //       response.success = true
  //       return res.json(response)
  //   }
  // }

  // response.success = false
  // response.msg = "로그인에 실패했습니다."
  // return res.json(response)
}}



module.exports = {
  output,
  process
}