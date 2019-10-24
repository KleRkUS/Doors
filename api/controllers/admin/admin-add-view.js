/**
 * RegisterController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	friendlyName: 'Render form to add new good',

	inputs: {

		type: {
			type: 'number'
		}

	},

	exits: {

		success: {

			viewTemplatePath: 'pages/account/admin-add'

		},

		badData: {
			viewTemplatePath: 'admin/dashboard/all'
		}

	},

	fn: async function(req, res) {
		const type = this.req.params.type;

		if (!type) throw 'badData';

		return {type};
	}

};