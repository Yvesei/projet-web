var express = require('express');
var router = express.Router();
const {PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient

/* GET articles listing. */
router.get('/', function(req, res, next) {
  const { take, skip } = req.query; // Extract take and skip from query parameters
  prisma.article.findMany({
    take: parseInt(take) || undefined, 
    skip: parseInt(skip) || undefined, 
  }).then(articles => res.send(articles))
});

// get a single articles 
router.get('/:id', function(req, res, next) {

  prisma.article.findUnique({where: { id : +req.params.id },})
  .then(article => res.send(article))
});

//post a new articles

router.post('/', function(req,res,next) {
  prisma.article.create({data : req.body})
  .then(article => res.send(article))

})


// delete a articles
router.delete('/:id', function(req,res,next) {
  prisma.article.delete({where: { id : +req.params.id },})
  .then(article => res.send(article))
});

//modify a acticles
router.patch('/', function(req,res,next) {
  prisma.article.update({
    where: { 
      id : parseInt(req.body.id) 
    },
    data : req.body })
  .then(article => res.send(article))
});
module.exports = router;
