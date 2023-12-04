"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body){
    this.body = body;
  }

  login(){
    const {id, pw} = UserStorage.getUsers('id', 'pw');
    console.log(id, pw)

    // if( id === this.body.id || pw ===)
  }
}