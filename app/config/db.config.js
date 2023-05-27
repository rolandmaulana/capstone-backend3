module.exports = {
    HOST: "localhost",
    USER: "capstone-admin",
    PASSWORD: "123456",
    DB: "capstone-backend3",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};