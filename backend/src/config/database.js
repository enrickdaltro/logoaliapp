module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'maps',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
};
