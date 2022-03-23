const axios = require('axios');
var _ = require('lodash');

function userService() {}

userService.prototype = {
    getUserProfile: async function(userId) {

      let user = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const todos = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
      const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

      user = _.omit(user, ['address', 'company'])
      

      return [
        {
          path: ["userProfile", "profile"], 
          value: user.data
        },
        {
          path: ["userProfile", "todos"],
          value: todos.data
        },
        {
          path: ["userProfile", "posts"],
          value: posts.data
        }
      ]
    }
}

module.exports = new userService();