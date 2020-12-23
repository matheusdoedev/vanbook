const Sequelize = require('sequelize');
// database
const { sequelize } = require('./index');

const Order = sequelize.define('Order', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  uf: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  card_number: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  card_valid: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  cvv: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Order;
