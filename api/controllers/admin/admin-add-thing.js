/**
 * RegisterController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	friendlyName: 'Add thing in catalog',

	inputs: {

		name: {
			type: 'string'
		},
		description: {
			type: 'string'
		},
		link: {
			type: 'string'
		},
		show: {
			type: 'string'
		},
		price: {
			type: 'number'
		},
		type: {
			type: 'number'
		}

	},

	fn: async function(req, res) {

		const thing = this.req.body,
			  query = await Catalog.create({ name: thing.name,
			  								 description: thing.description,
			  								 price: thing.price,
			  								 link: thing.link,
			  								 type: thing.type,
			  								 show: Boolean(thing.show) });
		this.res.redirect('/admin/dashboard/'+thing.type);

	}

};