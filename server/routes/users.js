var express = require('express');
var router = express.Router();
const {PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient

/* GET users listing. */
router.get('/', function(req, res, next) {
  const { take, skip } = req.query; // Extract take and skip from query parameters
  prisma.utilisateur.findMany({
    take: parseInt(take) || undefined, 
    skip: parseInt(skip) || undefined, 
  }).then(utilisateurs => res.send(utilisateurs))
});

// get a single user 
router.get('/:id', function(req, res, next) {

  prisma.utilisateur.findUnique({where: { id : +req.params.id },})
  .then(utilisateur => res.send(utilisateur))
});

//post a new user

router.post('/', function(req,res,next) {
  prisma.utilisateur.create({data : req.body})
  .then(utilisateur => res.send(utilisateur))

})


// delete a user
router.delete('/:id', function(req,res,next) {
  prisma.utilisateur.delete({where: { id : +req.params.id },})
  .then(utilisateur => res.send(utilisateur))
});

//modify a user
router.patch('/', function(req,res,next) {
  prisma.utilisateur.update({
    where: { 
      id : +req.body.id 
    },
    data : req.body })
  .then(utilisateur => res.send(utilisateur))
});
module.exports = router;
