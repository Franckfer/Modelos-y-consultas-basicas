const express = require('express');
const router = express.Router();
const {
    list,
    neww,
    recomended,
    detail,
} = require('../controllers/moviesController');

router.get('/movies',list);
router.get('/movies/new',neww);
router.get('/movies/recommended',recomended);
router.get('/movies/detail/:id',detail);


module.exports = router;