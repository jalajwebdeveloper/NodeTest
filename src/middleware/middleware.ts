import { Request, Response, NextFunction } from 'express';
/**
 * Middleware
 * 
 * @param req 
 * @param res 
 * @param next
 * @returns 
 */

export default async function authenticateUser(req: Request, res: Response, next: NextFunction) {
    if (req.originalUrl.includes('/pub/proxy/')) {
        next()
    } else {
        res.send({ status: false, msg: "route is not containing pub/proxy and api/proxy" })
    }
}