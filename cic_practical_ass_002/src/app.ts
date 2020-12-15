import Express from 'express';
import mssql from 'mssql';
const app = Express();
const port = 2300;


const query_db = {
    server: "10.36.4.68",
    database: "_Root_DB",
    user: "grant",
    password: "vwsa00@2019",
    port: 1433,
    idleTimeoutMillis: 30000,
    options: {
      encrypt: false
    }
}


const query = `
    -- TODO: CODE COMES HERE
    
`;



app.get('/', async (req, res) => {
    try {
        const pool = new mssql.ConnectionPool(query_db);
    
        await pool.connect();
        const request = pool.request();
        const result = await request.query(query);

        res.send(result.recordset);

    } catch(err) {
        console.log(err);
        res.status(422).send('query failed to execute: ' + err);
    }

    res.end();
});


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});