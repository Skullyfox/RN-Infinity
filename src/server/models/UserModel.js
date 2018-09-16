/*
* The User Model.
*
*/
const Bookshelf = require('../services/database.js');

const User = Bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: true,
});

module.exports = User;