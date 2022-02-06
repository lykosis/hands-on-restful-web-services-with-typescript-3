import { NextFunction, Request, Response } from 'express';
export declare let getOrder: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
export declare let addOrder: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
export declare let removeOrder: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
export declare let getInventory: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
