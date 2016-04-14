
(function () {

	var express = require('express');
	var router = express.Router();
	var ctrlCompanies = require('../controllers/companies');
	var ctrlOthers = require('../controllers/others');

	// GET companies pages.

	// router.get('/', ctrlCompanies.homelist);

	// router.get('/company', ctrlCompanies.companyInfo);

	// router.get('/company/review/new', ctrlCompanies.addReview);

	// GET other pages.

	// router.get('/about', ctrlOthers.about);

	// GET angular view

	router.get('/', ctrlOthers.angularApp);

	// router.get('/onas', ctrlOthers.onas);

	module.exports = router;

}) () ;