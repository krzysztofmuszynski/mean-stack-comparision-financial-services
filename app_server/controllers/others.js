// // GET 'about' page
module.exports.about = function(req,res){
	res.render('generic-text', {title: 'About'});
};

module.exports.angularApp = function(req,res){
	res.render('layout', {title: 'Transfer company compare'});
};