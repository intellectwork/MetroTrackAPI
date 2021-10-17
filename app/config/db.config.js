module.exports = {
  HOST: "mssql-26747-0.cloudclusters.net",
  PORT: "26754",
  USER: "metro",
  PASSWORD: "Metro12345!",
  DB: "DistanceCalc",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
