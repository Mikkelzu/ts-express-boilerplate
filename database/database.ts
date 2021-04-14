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
        // Use the .env file to set your database connection details. no need to edit it here.
        return this.connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        })
    }

    public connect(): void {
        this.connection.connect()
    }

    public disconnect(): void {
        this.connection.end()
    }
}