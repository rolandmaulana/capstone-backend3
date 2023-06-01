module.exports = (sequelize, Sequelize) => {
    const Plan = sequelize.define("plans", {
        city: {
            type: Sequelize.STRING
        },
        duration: {
            type: Sequelize.INTEGER
        },
        bahari: {
            type: Sequelize.BOOLEAN
        },
        budaya: {
            type: Sequelize.BOOLEAN
        },
        tamanHiburan: {
            type: Sequelize.BOOLEAN
        },
        cagarAlam: {
            type: Sequelize.BOOLEAN
        },
        pusatPerbelanjaan: {
            type: Sequelize.BOOLEAN
        },
        tempatPerbelanjaan: {
            type: Sequelize.BOOLEAN
        }
        
    });
  
    return Plan;
};