import mysql from "mysql2/promise";
import { DatabaseSetting } from "./DatabaseSetting";

export class Database {
    private connection;

    constructor(){
        this.connection = mysql.createPool(DatabaseSetting);
    }

    async query(sql: string, params?: any[]) {
        try {
          const [rows] = await this.connection.query(sql, params);
          return rows;
        } catch (error) {
          console.log(error);
          throw error;
        }
      }
}