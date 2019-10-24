/**
 * CatalogController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
	friendlyName: 'Veiw catalog',

	description: 'Display goods from catalog depending on URL params',

	exits: {

		success: {
			viewTemplatePath: 'pages/catalog/index'
		}

	},


	fn: async function(req, res) {

		const data = await Catalog.find({type: this.req.params.type,
										 show: true}),
			  titles = ["Фурнитура", "Входные двери", "Межкомнатные двери"];

		return {
			title: titles[this.req.params.type],
			data: data
		}

	}

};

