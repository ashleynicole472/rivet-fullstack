'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pages',
    [
      {
        rivet_type: 'Connector 3000',
        content: "Chase guns capstan chase aft spike wench scurvy nipper haul wind jack lateen sail Privateer Pieces of Eight rutters cutlass. Case shot wench scallywag walk the plank Barbary Coast yawl strike colors bilge bucko shrouds.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rivet_type: 'Thors Hammer 4.5',
        content: "Bacon ipsum dolor amet spare ribs pork belly fatback shankle pork loin, bacon pancetta meatloaf bresaola. Burgdoggen turkey meatball pig ham hock, sausage flank swine chuck ground round cow jowl turducken beef boudin.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rivet_type: 'Hodor',
        content: "Hodor, HODOR hodor, hodor hodor, hodor. Hodor hodor?! Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor? Hodor hodor - hodor - HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor. Hodor hodor hodor - hodor - HODOR hodor, hodor hodor hodor! ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rivet_type: 'Falcone 76',
        content: "Lorem ipsum dolor amet disrupt pitchfork messenger bag venmo church-key. Chillwave keffiyeh microdosing pork belly, kickstarter asymmetrical chicharrones ramps cardigan cloud bread franzen iceland fingerstache seitan.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rivet_type: 'Guerrilla Steel',
        content: "We'll put some happy little leaves here and there. If you've been in Alaska less than a year you're a Cheechako. Didn't you know you had that much power? You can move mountains. You can do anything.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pages', null, {})
  }
};
