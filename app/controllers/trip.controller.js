const sql = require('mssql');

const config = {
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


exports.getTripStatus = (req, res) => {
 
sql.on('error', err => {
    console.log(err);
})

sql.connect(config).then(pool => {
    
    // Stored procedure
    
    return pool.request()
        .input('vechileId', sql.VarChar(50), req.query.vechileId)
        .output('tripStatus', sql.VarChar(50))
        .execute('getTripStatus')
}).then(result => {
    res.send(result.output.tripStatus);
    console.dir(result)
}).catch(err => {
    console.log(err);
})
 
};

