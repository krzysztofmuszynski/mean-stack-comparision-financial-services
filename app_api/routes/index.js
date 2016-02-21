var express = require('express');
var router = express.Router();

var ctrlCompanies = require('../controllers/companies');

var ctrlReviews = require('../controllers/reviews');

var ctrlUser = require('../controllers/users');

//companies

router.get('/companies', ctrlCompanies.companiesOfferList);
router.post('/companies', ctrlCompanies.companiesCreate);
router.get('/companies/:companyid', ctrlCompanies.companiesReadOne);
router.put('/companies/:companyid', ctrlCompanies.companiesUpdateOne);
router.delete('/companies/:companyid', ctrlCompanies.companiesDeleteOne);

// add offer

router.post('/companies/offers', ctrlCompanies.companyOfferCreate);
router.get('/companies/offers/:offerid', ctrlCompanies.companyOfferReadOne);
router.put('/companies/offers/:offerid', ctrlCompanies.companyOfferUpdateOne);
router.delete('/companies/offers/:offerid', ctrlCompanies.companyOfferDeleteOne);

// reviews

router.post('/companies/:companyid/reviews', ctrlReviews.reviewsCreate);
router.get('/companies/:companyid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
router.put('/companies/:companyid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
router.delete('/companies/:companyid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);

//user

router.get('/users', ctrlUser.userReadAll);
router.post('/users', ctrlUser.userCreate);
router.get('/users/:userid', ctrlUser.userReadOne);
router.put('/users/:userid', ctrlUser.userUpdateOne);
router.delete('/users/:userid', ctrlUser.userDeleteOne);

module.exports = router;