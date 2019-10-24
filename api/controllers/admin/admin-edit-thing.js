module.exports = {

	friendlyName: 'Edit thing',

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
		}, 
		id: {
			type: 'number'
		}

	},

	fn: async function(req, res) {

		const thing = this.req.body,
			  id = this.req.params.id,
			  query = await Catalog.updateOne({ id: id }).set({
			  								 name: thing.name,
			  								 description: thing.description,
			  								 price: thing.price,
			  								 link: thing.link,
			  								 type: thing.type,
			  								 show: Boolean(thing.show) });

		this.res.redirect('/admin/dashboard/'+thing.type);

	}

};