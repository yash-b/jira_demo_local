// CPSC 542 - Software Validation and Verification
// Prof. David Heckathorn
// Yash Bhambhani, Nicole Traboulsi
// Dec 02, 2020

import { RequestHandler } from 'express';

export const addRespondToResponse: RequestHandler = (_req, res, next) => {
  res.respond = (data): void => {
    res.status(200).send(data);
  };
  next();
};
