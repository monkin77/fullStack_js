// Copyright IBM Corp. 2016,2019. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

const { Role } = require('loopback');
const loopback = require('loopback');
const boot = require('loopback-boot');

const app = module.exports = loopback();

app.start = function () {
  // start the web server
  return app.listen(function () {
    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

console.log(Object.keys(app.models));


app.models.user.find((err, result) => {
  if (result.length === 0) {
    const user = {
      email: "nick@nick.com",
      password: "test",
      username: 'nick',
    };

    app.models.user.create(user, (err, result) => {
      console.log("Tried to create user", err, result);
    })
  }
})


app.models.user.afterRemote('create', (ctx, user, next) => {    // ctx -> context | Everytime an object is created this function will be called
  console.log("New user is", user);
  app.models.Profile.create({
    name: user.name,
    created_at: new Date(),
    userId: user.id,
    role: 'subscriber',
  }, (err, result) => {
    if (!err && result) {
      console.log("Created new profile!", result);
    }
    else {
      console.log("There is an error", err);
    }
    next();
  });

});

app.models.Role.find({ where: { name: 'admin' } }, (err, role) => {       // creates the Role Admin and assigns a user to it
  if (!err && role) {
    console.log('No error, role is', role);
    if (role.length === 0) {
      app.models.Role.create({
        name: 'admin',
      }, (err2, result) => {
        if (!err2 && result) {
          console.log("Assigning user to role admin...");
          app.models.user.findOne((userErr, user) => {
            if (!userErr && user) {
              result.principals.create({
                principalType: app.models.RoleMapping.USER,
                principalId: user.id,
              }, (err3, principal) => {
                console.log('Created principal', err3, principal);
              });
            }
          });
        }
      });
    }
  }
});

app.models.Role.find({ where: { name: 'editor' } }, (err, roles) => {   // creates the Role editor and assigns a user to it
  if (!err && roles) {
    if (roles.length === 0) {
      app.models.Role.create({
        name: 'editor',
      }, (creationErr, result) => {
        if (!creationErr && result) {
          console.log("Creation of role editor", creationErr, result);
        }
      })
    }
  }
})