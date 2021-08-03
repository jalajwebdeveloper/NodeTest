import cookieParser from 'cookie-parser';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import BaseRouter from "./route";
import authenticateUser from "./middleware/middleware";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(authenticateUser);
app.use(BaseRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err, true);
    return res.status(400).json({
        error: err.message,
    });
});

export default app;
