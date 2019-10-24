/**
 * SendmailController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	sendMail: async function(req, res) {
		if (req.body.name && req.body.phone && req.body.time) {
			var mail = await sails.helpers.email.with({
				name: req.body.name, 
				phone: req.body.phone,
				time: req.body.time
			});
			res.json(200, "ok");
		} else {
			console.log('Something went wrong');
		}
	}  
};