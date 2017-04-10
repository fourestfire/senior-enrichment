'use strict';

// seed file not functional. seeding is built into the sync function on db/index.js
var Promise = require('bluebird');

var db = require('./db/');
var Campus = require('./db/models/campus');
var User = require('./db/models/user');

function generateUsers () {
  var users = [];
  users.push(User.build({
    name: 'Zeke Nierenberg',
    email: 'zeke@zeke.zeke',
    campusId: '1',
  }));
  users.push(User.build({
    name: 'Omri Bernstein',
    email: 'omri@zeke.zeke',
    campusId: '1',
  }));
  users.push(User.build({
    name: 'Luke Skywalker',
    email: 'luke@zeke.zeke',
    campusId: '2',
  }));
  users.push(User.build({
    name: 'Obi Wan Kenobi',
    email: 'obi@zeke.zeke',
    campusId: '2',
  }));
  return users;
}

function createUsers () {
  return Promise.map(generateUsers(), function (user) {
    return user.save();
  });
}

function seed () {
  return createUsers();
  // .then(function (createdUsers) {
  //   return createStories(createdUsers);
  // });
}

console.log('Syncing database');

db.sync({force: true})
.then(function () {
  console.log('Seeding database');
  return seed();
})
.then(function () {
  console.log('Seeding successful');
}, function (err) {
  console.error('Error while seeding');
  console.error(err.stack);
})
.finally(function () {
  db.close();
  return null;
});
