/**
 * RegisterController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	friendlyName: 'Render view for edit form',

	inputs: {
		id: {
			type: 'number'
		}
	},

	exits: {

		success: {
			viewTemplatePath: 'pages/account/admin-edit'
		}

	},

	fn: async function(req, res) {

		const id = this.req.params.id,
			  thing = await Catalog.findOne({id: Number(id)}),
			  arr = ['Фурнитура', 'Входные', 'Межкомнатные'];

		console.log(thing.id);

		if (!thing) this.res.redirect('/admin/dashboard/all');

		return {thing, arr};

	}

};