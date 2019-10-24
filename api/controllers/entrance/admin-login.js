/**
 * SendmailController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	friendlyName: 'Admin logging in',

	description: 'Check if Admin login and password valid and starting a session',

	inputs: {
		username: {
			type: 'string',
			required: true
		},

		password: {
			type: 'string',
			required: true
		}
	},


	exits: {

		success: {

			viewTemplatePath: 'pages/account/admin-dashboard'

		},

		badLogin: {

			description: 'While logging in is used only for admin panel we can just redirect other users to main page',
			viewTemplatePath: 'pages/homepage'

		}

	},

	fn: async function(req, res) {

		const username = this.req.body.username,
			  password = this.req.body.password,
			  user = await Users.findOne({username: username}).decrypt();

		if (user.password != password) {
			return this.res.redirect('/');
		} else {
			this.req.session.userId = user.id;
			this.req.session.auth = true;

			return {
				renderOnlyLinks: true
			}
		}
	}

};