module.exports = {


  friendlyName: 'Email',


  description: 'Email something.',


  inputs: {
    name: {
      description: "Name from form",
      type: "string",
      required: true
    },
    phone: {
      description: "Phone from form",
      type: "string",
      required: true
    },
    time: {
      description: "Time from form",
      type: "string",
      required: true
    },
  },
  exits: {
    success: {
      outputFriendlyName: "Email delievered",
    },
    error: {
      outputFriendlyName: "Error blyad"
    }
  },


  fn: async function (inputs, exits) {
    sails.hooks.email.send(
      "offerEmail",
      {
        Name: inputs.name,
        Phone: inputs.phone,
        Time: inputs.time
      },
      {
        Subject: "Новый заказ с сайта"
      },
      function(err) {console.log(err || "It worked");}
    );
    return true;
  }


};

