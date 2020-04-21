const axios = require("axios");
const inquirer = require("inquirer");

function findUser(username) {
  inquirer
    .prompt({
      message: "Enter your GitHub username:",
      name: "username",
    })
    .then(function ({ username }) {
      const queryUrl = `https://api.github.com/users/${username}/events/public`;

      axios.get(queryUrl).then(function (res) {
      });
    });
}
module.exports = findUser