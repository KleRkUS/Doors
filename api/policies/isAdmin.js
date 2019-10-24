module.exports = async function(req, res, proceed) {

	if (req.session.auth) {
		return proceed();
	}

	return res.forbidden();

}