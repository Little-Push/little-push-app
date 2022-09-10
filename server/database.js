import * as pg from 'pg'
const { Pool } = pg.default

class Database {
    constructor () {
        this.pool = new Pool()
    }

    async insert (table, data) {
        const rowValues = data.map(rowObject => {
            return `('${Object.values(rowObject).join(`', '`)}')`
        })
        const sql = `INSERT INTO ${table} ("${Object.keys(data[0]).join('", "')}") VALUES ${rowValues.join(', ')}`
        console.log(sql)
        // TODO: execute query
        const results = await this.pool.query(sql)
        console.log({ results })
    }
}

export { Database }
