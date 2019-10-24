module.exports = {

	friendlyName: 'Delete thing',

	inputs: {

		id: {
			type: 'number'
		},
		type: {
			type: 'string'
		}

	},

	exits: {

		badResult: {
			viewTemplatePath: 'pages/account/admin-dashboard'
		}

	},

	fn: async function(req, res) {

		const id = this.req.params.id,
			  type = this.req.params.type,
			  query = await Catalog.destroyOne({id: Number(id)});

		if (!query) throw 'badResult';

		this.res.redirect('/admin/dashboard/'+type);
	}

}