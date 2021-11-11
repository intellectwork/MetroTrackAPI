module.exports =  {
  user: "metro",
  password: "Metro12345!",
  database: "DistanceCalc",
  server: 'mssql-26747-0.cloudclusters.net',
  port: 26754,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}
