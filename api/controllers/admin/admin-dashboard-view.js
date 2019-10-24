/**
 * RegisterController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	frienlyName: 'Dashboard for admin',

	description: 'Render view for editing/removing/creating goods',

	inputs: {

		type: {
			type: 'string',
			description: 'Type of a goods'
		}
	
	},

	exits: {

		success: {
			viewTemplatePath: 'pages/account/admin-dashboard'
		},

		badData: {
			viewTemplatePath: '/'
		}

	},

	fn: async function(req, res) {

		const type = this.req.params.type,
			  arrTypes = ['0', '1', '2'];

		if (type == "all") {
			return {
				renderOnlyLinks: true
			};
		} else if (arrTypes.includes(type)) {
			
			const catalog = await Catalog.find({type}),
				  types = ['Фурнитура', 'Входные двери', 'Межкомнатные двери'];

			return {
				type: types[Number(type)],
				typeNum: type,
				renderOnlyLinks: false,
				catalog: catalog
			};
		} else {
			throw 'badData';
		}
	}

};