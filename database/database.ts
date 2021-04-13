/*
    Not implemented its all just boilerplate until I decide to start doing database connections.
    This class is mostly for people who would rather query the database from their app, instead of building a RESTful API and using http requests
 */

import * as mysql from 'mysql'

export default class Database {

    public connection: any;
    constructor() {

    }

    public createConnectionToDatabase(): any {
        // this is all temp ignore it.
        return this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'test'
        })
    }

    public connect(): void {
        this.connection.connect()
    }

    public disconnect(): void {
        this.connection.end()
    }
}