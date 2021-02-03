var models = require('./server.js').models;

/*
var toSave = [
    {name: 'Nick', email: 'nickgermain@gmail.com'},
    {name: 'Nick1', email: 'nickgmain@gmail.com'},
    {name: 'Nick', email: 'ckgermain@gmail.com'},
    {name: 'Nick2', email: 'nickermain@gmail.com'},
    {name: 'Nick', email: 'nickgern@gmail.com'},
    {name: 'Nick3', email: 'nickgermain@gmail.com'},
    {name: 'Nick', email: 'nickgermain@gl.com'},
    {name: 'Someone', email: 'nickgermain@gmail.com'},
    {name: 'Someone else', email: 'nickgermain@gmail.com'},
    {name: 'Someone1', email: 'nickgermain@gmail.com'},
    {name: 'sum', email: 'nickgermain@gmail.com'},
    {name: 'rego', email: 'nickgermain@gmail.com'},
    {name: 'wut', email: 'nickgermain@gmail.com'},
];

toSave.map( obj => {
    models.Profile.create(obj, (err, created) => {
        console.log("Created?", created);
    })
} )
*/

var filter = {
    where: {
        name: {like: 'Nick'},
    }, // Kind of like mySQL Where Clause
    order: 'id ASC', // Order by: "field direction"
    limit: 10,
    skip: 0,
    fields: {
        email: true,
    }
    /*
    include: {
        relation: 'Posts',
        scope: {
            limit: 5,
            order: 'date DESC',
            include: {
                relation: 'Image',
                limit: 1,
                where: {type: 'thumbnail'},
            }
        }
    },
 */   
}

models.Profile.destroyAll(filter.where, (err, found) => {
    console.log("Found?", err, found);
});