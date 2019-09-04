module.exports = (req, res, next) => {
	console.log("Headers FROM AUTH");
	console.log(req.headers);
	next();	
}