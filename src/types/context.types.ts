import { type Request, type Response } from "express";


interface Context {
  req: Request;
  res: Response;
  token?: string;
//   user?: Admin | User | Employee;
}

export default Context;
