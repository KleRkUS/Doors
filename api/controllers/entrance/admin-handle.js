/**
 * SendmailController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	friendlyName: 'Handler for admin page requset',

	description: 'Check if admin already logged in and redirect',

	exits: {

		success: {
			viewTemplatePath: 'pages/account/admin-dashboard'
		},

		unLogged: {
			viewTemplatePath: 'pages/account/admin-login'
		}

	}, 

	fn: function(req, res) {
		if (this.req.session.userId) {
			return {
				renderOnlyLinks: true
			};
		} else {
			throw 'unLogged'; 
		}
	}

}