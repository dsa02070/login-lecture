"use strict";

class UserStorage {

  static #users = {
    id: ["woori", "webs", "kim"],
    pw: ["1111", "2222", "3333"],
    name: ["우리", "webs", "kim"],
  }

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {

      if(users.hasOwnProperty(field)) {
        newUsers[field] = users[field]
      }
      return newUsers
    }, {})
    return newUsers
  }

  static getUsers(id){
    const users = this.#users
    return usersInfo 
  }
}

module.exports = UserStorage