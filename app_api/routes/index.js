var express = require('express');
var router = express.Router();

var ctrlCompanies = require('../controllers/companies');

var ctrlCompaniesCompare = require('../controllers/companiesCompare');

var ctrlReviews = require('../controllers/reviews');

var ctrlUser = require('../controllers/users');

//companies

router.get('/companies', ctrlCompanies.companiesOfferList);
router.post('/companies', ctrlCompanies.companiesCreate);
router.get('/companies/:companyid', ctrlCompanies.companiesReadOne);
router.put('/companies/:companyid', ctrlCompanies.companiesUpdateOne);
router.delete('/companies/:companyid', ctrlCompanies.companiesDeleteOne);

// add offer
router.get('/compare', ctrlCompaniesCompare.offerReadAll);
router.post('/compare', ctrlCompaniesCompare.offerCreateOne);
router.get('/compare/:offerid', ctrlCompaniesCompare.offerReadOne);
router.put('/compare/:offerid', ctrlCompaniesCompare.offerUpdateOne);
router.delete('/compare/:offerid', ctrlCompaniesCompare.offerDeleteOne);

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