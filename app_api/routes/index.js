var express = require('express');
var router = express.Router();

var ctrlCompanies = require('../controllers/companies');

var ctrlReviews = require('../controllers/reviews');

var ctrlUser = require('../controllers/user');

//companies

router.get('/companies', ctrlCompanies.companiesListByRate);
router.post('/companies', ctrlCompanies.companiesCreate);
router.get('/companies/:companyid', ctrlCompanies.companiesReadOne);
router.put('/companies/:companyid', ctrlCompanies.companiesUpdateOne);
router.delete('/companies/:companyid', ctrlCompanies.companiesDeleteOne);

// reviews

router.post('/companies/:companyid/reviews', ctrlReviews.reviewsCreate);
router.get('/companies/:companyid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
router.put('/companies/:companyid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
router.delete('/companies/:companyid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);

//user

router.get('/user', ctrlUser.userReadAll);
router.post('/user', ctrlUser.userCreate);
router.get('/user/:userid', ctrlUser.userReadOne);
router.put('/user/:userid', ctrlUser.userUpdateOne);
router.delete('/user/:userid', ctrlUser.userDeleteOne);

module.exports = router;