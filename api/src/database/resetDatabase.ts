// CPSC 542 - Software Validation and Verification
// Prof. David Heckathorn
// Yash Bhambhani, Nicole Traboulsi
// Dec 02, 2020

import { getConnection } from 'typeorm';

const resetDatabase = async (): Promise<void> => {
  const connection = getConnection();
  await connection.dropDatabase();
  await connection.synchronize();
};

export default resetDatabase;
