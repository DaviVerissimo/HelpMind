const Sequelize = require('sequelize');
const db = require('./db');

const Reporte = db.define('reportes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    curso: {
        type: Sequelize.STRING
    },
    ano: {
        type: Sequelize.STRING
    },
    suicidio: {
        type: Sequelize.STRING
    },
    descrisao: {
        type: Sequelize.STRING
    }
});

//Criar a tabela
Reporte.sync();

module.exports = Reporte;