'use strict'
var SequelizeMock = require('sequelize-mock')
var dbMock = new SequelizeMock()

module.exports = function(sequelize, DataTypes){
  return dbMock.define('Page', {
    rivet_type: 'Connector 3000',
    content: "Chase guns capstan chase aft spike wench scurvy nipper haul wind jack lateen sail Privateer Pieces of Eight rutters cutlass. Case shot wench scallywag walk the plank Barbary Coast yawl strike colors bilge bucko shrouds hands fathom plunder heave to spyglass. Matey hail-shot Jack Tar dead men tell no tales loot Spanish Main Sail ho swing the lead coxswain ballast mizzen execution dock code of conduct hands splice the main brace. Parley coxswain shrouds aft careen fire ship cutlass jack walk the plank heave down take a caulk pink overhaul Blimey Corsair."
  })
}
