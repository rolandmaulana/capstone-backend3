module.exports = (sequelize, Sequelize) => {
    const Plan = sequelize.define("plans", {
        city: {
            type: Sequelize.STRING
        },
        totalDay: {
            type: Sequelize.INTEGER
        },
        userAge: {
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
        tempatIbadah: {
            type: Sequelize.BOOLEAN
        }
        
    });
  
    return Plan;
};