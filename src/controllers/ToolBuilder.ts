import { Request, Response } from 'express';
import knex from '../config/knexconfig';

export default (_req: Request, res: Response) => {
    console.log(knex);
    res.send('<h1>Hello World!</h1>');
};
