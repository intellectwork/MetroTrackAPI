const dbConfig2 = require("../config/db.config2.js");
const sql = require('mssql');



exports.getTripStatus = (req, res) => {
 
sql.on('error', err => {
    console.log(err);
})

sql.connect(dbConfig2).then(pool => {
    
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

