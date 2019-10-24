/**
 * RegisterController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
	frienlyName: 'Create user',

	description: 'Action that creates new user',


	exits: {

		success: {
			viewTemplatePath: 'pages/register/check'
		}

	},


	fn: async function(req, res) {
		const username = this.req.body.username,
			  password = this.req.body.password,
			  query = await Users.create({username: username, password: password});
		return (username, password);
	}
};