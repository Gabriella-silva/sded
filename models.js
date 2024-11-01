const { DataTypes } = require('sequelize');
const sequelize = require('./config');

const Dados = sequelize.define('Dados', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

module.exports = { Dados, sequelize };
