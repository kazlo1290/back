var express = require('express');
var router = express.Router();
var db=require('../database');
router.get('/form', function(req, res, next) {
res.render('users');
});

router.post('/create', function(req, res, next) {

  // store all the user input data
  const userDetails=req.body;

  // insert user data into users table
  var sql = 'INSERT INTO instructor SET ?';
  db.query(sql, userDetails,function (err, data) {
      if (err) throw err;
         console.log("User dat is inserted successfully ");
  });
 res.redirect('/users/form');  // redirect to user form page after inserting the data
});


router.get('/edit/:id', function(req, res, next) {
      var UserId= req.params.id;
      var sql=`SELECT * FROM instructor WHERE ID=${UserId}`;
      db.query(sql, function (err, data) {
        if (err) throw err;

        res.render('edit-form', { title: 'User List', editData: data[0]});
      });
});
router.post('/edit/:id', function(req, res, next) {
  var id= req.params.id;
    var updateData=req.body;
    var sql = `UPDATE instructor SET ? WHERE ID= ?`;
    db.query(sql, [updateData, id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) updated");
  });
  res.redirect('/users/user-list');
});

router.get('/delete/:id', function(req, res, next) {
  var id= req.params.id;
    var sql = 'DELETE FROM instructor WHERE ID = ?';
    db.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) deleted");
  });
  res.redirect('/users/user-list');

});

router.get('/user-list', function(req, res, next) {
    var sql=`SELECT * FROM instructor`;
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('user-list', { title: 'User List', userData: data});
  });
});

router.get('/user-list/:id', function(req, res, next) {
    var UserId= req.params.id;
    //var sql=`SELECT * FROM instructor WHERE ID=${UserId}`;
    var sql=`SELECT * FROM instructor WHERE ID=?`;
    db.query(sql,UserId, function (err, data, fields) {
    if (err) throw err;
    res.render('user-list', { title: 'User List', userData: data});
  });
});


module.exports = router;
