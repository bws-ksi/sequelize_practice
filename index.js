const {User} = require("./db/models")

/*
User.create({
  firstName: "John",
    lastName: "Dow",
    email: "ddfg@dsf.cm",
    login: "john",
    passwordHash: "werwer-werwer-werwer-werwer-wer",
    age: 20
}).then(console.log);

User.create({
  firstName: "Sara",
    lastName: "Conor",
    email: "23423@dsf.com",
    login: "sara",
    passwordHash: "werasdasdwer-werwer-werwer-werwer-wer",
    age: 18
}).then(console.log)
*/
User.findByPk(31).then(console.log)
User.findAll().then(console.log)