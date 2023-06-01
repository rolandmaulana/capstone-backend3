module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        isMale: {
            type: Sequelize.BOOLEAN
        },
        hobby: {
            type: Sequelize.STRING
        },
        from: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });
  
    return User;
};