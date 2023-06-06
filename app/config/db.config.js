module.exports = {
    HOST: "34.128.80.91",
    USER: "postgres",
    PASSWORD: "journie123",
    DB: "capstone-backend3",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};