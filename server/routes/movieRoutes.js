const express = require('express') ;

const router = express.Router() ;
const movieController = require('../controllers/movieController') ;


/*
 * App router 
 */
router.get('/api/movies/',movieController.listMovies) ;


module.exports = router ;