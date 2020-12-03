// CPSC 542 - Software Validation and Verification
// Prof. David Heckathorn
// Yash Bhambhani, Nicole Traboulsi
// Dec 02, 2020

import { createConnection, Connection } from 'typeorm';

import * as entities from 'entities';

const createDatabaseConnection = (): Promise<Connection> =>
  createConnection({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: Object.values(entities),
    synchronize: true,
  });

export default createDatabaseConnection;
