require("dotenv").config();

const config = {
    port: process.env.PORT || 3001,
    env: process.env.NODE_ENV || "development",
    isProd: process.env.NODE_ENV === "production",
    dbUrl: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET || "PruebaBackendNeedzio",
};

module.exports = config;