// GET 'home' page
module.exports.homelist = function (req, res) {
	res.render('companies', {title: 'Home'});
};

// GET 'company info' page
module.exports.companyInfo = function (req,res) {
	res.render('company-info', {title: 'Company info'});
};

// GET 'addReview' page
module.exports.addReview = function (req,res) {
	res.render('company-review-form', {title: 'Add Review'});
};